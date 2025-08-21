# `apigeeApiProduct` Submodule <a name="`apigeeApiProduct` Submodule" id="@cdktf/provider-google.apigeeApiProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeApiProduct <a name="ApigeeApiProduct" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product google_apigee_api_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProduct(Construct Scope, string Id, ApigeeApiProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig">ApigeeApiProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig">ApigeeApiProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup">PutGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup">PutGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup">PutOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApiResources">ResetApiResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApprovalType">ResetApprovalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetEnvironments">ResetEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGraphqlOperationGroup">ResetGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGrpcOperationGroup">ResetGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOperationGroup">ResetOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetProxies">ResetProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaCounterScope">ResetQuotaCounterScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaInterval">ResetQuotaInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaTimeUnit">ResetQuotaTimeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetSpace">ResetSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes"></a>

```csharp
private void PutAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutGraphqlOperationGroup` <a name="PutGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup"></a>

```csharp
private void PutGraphqlOperationGroup(ApigeeApiProductGraphqlOperationGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGraphqlOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---

##### `PutGrpcOperationGroup` <a name="PutGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup"></a>

```csharp
private void PutGrpcOperationGroup(ApigeeApiProductGrpcOperationGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putGrpcOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---

##### `PutOperationGroup` <a name="PutOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup"></a>

```csharp
private void PutOperationGroup(ApigeeApiProductOperationGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeApiProductTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

---

##### `ResetApiResources` <a name="ResetApiResources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApiResources"></a>

```csharp
private void ResetApiResources()
```

##### `ResetApprovalType` <a name="ResetApprovalType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetApprovalType"></a>

```csharp
private void ResetApprovalType()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetEnvironments"></a>

```csharp
private void ResetEnvironments()
```

##### `ResetGraphqlOperationGroup` <a name="ResetGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGraphqlOperationGroup"></a>

```csharp
private void ResetGraphqlOperationGroup()
```

##### `ResetGrpcOperationGroup` <a name="ResetGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetGrpcOperationGroup"></a>

```csharp
private void ResetGrpcOperationGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOperationGroup` <a name="ResetOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetOperationGroup"></a>

```csharp
private void ResetOperationGroup()
```

##### `ResetProxies` <a name="ResetProxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetProxies"></a>

```csharp
private void ResetProxies()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetQuotaCounterScope` <a name="ResetQuotaCounterScope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaCounterScope"></a>

```csharp
private void ResetQuotaCounterScope()
```

##### `ResetQuotaInterval` <a name="ResetQuotaInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaInterval"></a>

```csharp
private void ResetQuotaInterval()
```

##### `ResetQuotaTimeUnit` <a name="ResetQuotaTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetQuotaTimeUnit"></a>

```csharp
private void ResetQuotaTimeUnit()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSpace` <a name="ResetSpace" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetSpace"></a>

```csharp
private void ResetSpace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeApiProduct resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeApiProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeApiProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeApiProduct.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeApiProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeApiProduct resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeApiProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeApiProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeApiProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList">ApigeeApiProductAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroup">GraphqlOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference">ApigeeApiProductGraphqlOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroup">GrpcOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference">ApigeeApiProductGrpcOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroup">OperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference">ApigeeApiProductOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference">ApigeeApiProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResourcesInput">ApiResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalTypeInput">ApprovalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributesInput">AttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environmentsInput">EnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroupInput">GraphqlOperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroupInput">GrpcOperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroupInput">OperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxiesInput">ProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScopeInput">QuotaCounterScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInput">QuotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaIntervalInput">QuotaIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnitInput">QuotaTimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResources">ApiResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalType">ApprovalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environments">Environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxies">Proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quota">Quota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScope">QuotaCounterScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInterval">QuotaInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnit">QuotaTimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.space">Space</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributes"></a>

```csharp
public ApigeeApiProductAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList">ApigeeApiProductAttributesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GraphqlOperationGroup`<sup>Required</sup> <a name="GraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroup"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOutputReference GraphqlOperationGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference">ApigeeApiProductGraphqlOperationGroupOutputReference</a>

---

##### `GrpcOperationGroup`<sup>Required</sup> <a name="GrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroup"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOutputReference GrpcOperationGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference">ApigeeApiProductGrpcOperationGroupOutputReference</a>

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `OperationGroup`<sup>Required</sup> <a name="OperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroup"></a>

```csharp
public ApigeeApiProductOperationGroupOutputReference OperationGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference">ApigeeApiProductOperationGroupOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeouts"></a>

```csharp
public ApigeeApiProductTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference">ApigeeApiProductTimeoutsOutputReference</a>

---

##### `ApiResourcesInput`<sup>Optional</sup> <a name="ApiResourcesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResourcesInput"></a>

```csharp
public string[] ApiResourcesInput { get; }
```

- *Type:* string[]

---

##### `ApprovalTypeInput`<sup>Optional</sup> <a name="ApprovalTypeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalTypeInput"></a>

```csharp
public string ApprovalTypeInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.attributesInput"></a>

```csharp
public object AttributesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environmentsInput"></a>

```csharp
public string[] EnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `GraphqlOperationGroupInput`<sup>Optional</sup> <a name="GraphqlOperationGroupInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.graphqlOperationGroupInput"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroup GraphqlOperationGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---

##### `GrpcOperationGroupInput`<sup>Optional</sup> <a name="GrpcOperationGroupInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.grpcOperationGroupInput"></a>

```csharp
public ApigeeApiProductGrpcOperationGroup GrpcOperationGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperationGroupInput`<sup>Optional</sup> <a name="OperationGroupInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.operationGroupInput"></a>

```csharp
public ApigeeApiProductOperationGroup OperationGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ProxiesInput`<sup>Optional</sup> <a name="ProxiesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxiesInput"></a>

```csharp
public string[] ProxiesInput { get; }
```

- *Type:* string[]

---

##### `QuotaCounterScopeInput`<sup>Optional</sup> <a name="QuotaCounterScopeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScopeInput"></a>

```csharp
public string QuotaCounterScopeInput { get; }
```

- *Type:* string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInput"></a>

```csharp
public string QuotaInput { get; }
```

- *Type:* string

---

##### `QuotaIntervalInput`<sup>Optional</sup> <a name="QuotaIntervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaIntervalInput"></a>

```csharp
public string QuotaIntervalInput { get; }
```

- *Type:* string

---

##### `QuotaTimeUnitInput`<sup>Optional</sup> <a name="QuotaTimeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnitInput"></a>

```csharp
public string QuotaTimeUnitInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApiResources`<sup>Required</sup> <a name="ApiResources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.apiResources"></a>

```csharp
public string[] ApiResources { get; }
```

- *Type:* string[]

---

##### `ApprovalType`<sup>Required</sup> <a name="ApprovalType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.approvalType"></a>

```csharp
public string ApprovalType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.environments"></a>

```csharp
public string[] Environments { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Proxies`<sup>Required</sup> <a name="Proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.proxies"></a>

```csharp
public string[] Proxies { get; }
```

- *Type:* string[]

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quota"></a>

```csharp
public string Quota { get; }
```

- *Type:* string

---

##### `QuotaCounterScope`<sup>Required</sup> <a name="QuotaCounterScope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaCounterScope"></a>

```csharp
public string QuotaCounterScope { get; }
```

- *Type:* string

---

##### `QuotaInterval`<sup>Required</sup> <a name="QuotaInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaInterval"></a>

```csharp
public string QuotaInterval { get; }
```

- *Type:* string

---

##### `QuotaTimeUnit`<sup>Required</sup> <a name="QuotaTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.quotaTimeUnit"></a>

```csharp
public string QuotaTimeUnit { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeApiProductAttributes <a name="ApigeeApiProductAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductConfig <a name="ApigeeApiProductConfig" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Name,
    string OrgId,
    string[] ApiResources = null,
    string ApprovalType = null,
    object Attributes = null,
    string Description = null,
    string[] Environments = null,
    ApigeeApiProductGraphqlOperationGroup GraphqlOperationGroup = null,
    ApigeeApiProductGrpcOperationGroup GrpcOperationGroup = null,
    string Id = null,
    ApigeeApiProductOperationGroup OperationGroup = null,
    string[] Proxies = null,
    string Quota = null,
    string QuotaCounterScope = null,
    string QuotaInterval = null,
    string QuotaTimeUnit = null,
    string[] Scopes = null,
    string Space = null,
    ApigeeApiProductTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.name">Name</a></code> | <code>string</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.apiResources">ApiResources</a></code> | <code>string[]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.approvalType">ApprovalType</a></code> | <code>string</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.attributes">Attributes</a></code> | <code>object</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.description">Description</a></code> | <code>string</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.environments">Environments</a></code> | <code>string[]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.graphqlOperationGroup">GraphqlOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.grpcOperationGroup">GrpcOperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#id ApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.operationGroup">OperationGroup</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.proxies">Proxies</a></code> | <code>string[]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quota">Quota</a></code> | <code>string</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaCounterScope">QuotaCounterScope</a></code> | <code>string</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaInterval">QuotaInterval</a></code> | <code>string</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaTimeUnit">QuotaTimeUnit</a></code> | <code>string</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.space">Space</a></code> | <code>string</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#display_name ApigeeApiProduct#display_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#org_id ApigeeApiProduct#org_id}

---

##### `ApiResources`<sup>Optional</sup> <a name="ApiResources" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.apiResources"></a>

```csharp
public string[] ApiResources { get; set; }
```

- *Type:* string[]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_resources ApigeeApiProduct#api_resources}

---

##### `ApprovalType`<sup>Optional</sup> <a name="ApprovalType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.approvalType"></a>

```csharp
public string ApprovalType { get; set; }
```

- *Type:* string

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#approval_type ApigeeApiProduct#approval_type}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.attributes"></a>

```csharp
public object Attributes { get; set; }
```

- *Type:* object

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#description ApigeeApiProduct#description}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.environments"></a>

```csharp
public string[] Environments { get; set; }
```

- *Type:* string[]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#environments ApigeeApiProduct#environments}

---

##### `GraphqlOperationGroup`<sup>Optional</sup> <a name="GraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.graphqlOperationGroup"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroup GraphqlOperationGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#graphql_operation_group ApigeeApiProduct#graphql_operation_group}

---

##### `GrpcOperationGroup`<sup>Optional</sup> <a name="GrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.grpcOperationGroup"></a>

```csharp
public ApigeeApiProductGrpcOperationGroup GrpcOperationGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#grpc_operation_group ApigeeApiProduct#grpc_operation_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#id ApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationGroup`<sup>Optional</sup> <a name="OperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.operationGroup"></a>

```csharp
public ApigeeApiProductOperationGroup OperationGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_group ApigeeApiProduct#operation_group}

---

##### `Proxies`<sup>Optional</sup> <a name="Proxies" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.proxies"></a>

```csharp
public string[] Proxies { get; set; }
```

- *Type:* string[]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#proxies ApigeeApiProduct#proxies}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quota"></a>

```csharp
public string Quota { get; set; }
```

- *Type:* string

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `QuotaCounterScope`<sup>Optional</sup> <a name="QuotaCounterScope" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaCounterScope"></a>

```csharp
public string QuotaCounterScope { get; set; }
```

- *Type:* string

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_counter_scope ApigeeApiProduct#quota_counter_scope}

---

##### `QuotaInterval`<sup>Optional</sup> <a name="QuotaInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaInterval"></a>

```csharp
public string QuotaInterval { get; set; }
```

- *Type:* string

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_interval ApigeeApiProduct#quota_interval}

---

##### `QuotaTimeUnit`<sup>Optional</sup> <a name="QuotaTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.quotaTimeUnit"></a>

```csharp
public string QuotaTimeUnit { get; set; }
```

- *Type:* string

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota_time_unit ApigeeApiProduct#quota_time_unit}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#scopes ApigeeApiProduct#scopes}

---

##### `Space`<sup>Optional</sup> <a name="Space" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#space ApigeeApiProduct#space}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductConfig.property.timeouts"></a>

```csharp
public ApigeeApiProductTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts">ApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#timeouts ApigeeApiProduct#timeouts}

---

### ApigeeApiProductGraphqlOperationGroup <a name="ApigeeApiProductGraphqlOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroup {
    object OperationConfigs = null,
    string OperationConfigType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigs">OperationConfigs</a></code> | <code>object</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigType">OperationConfigType</a></code> | <code>string</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `OperationConfigs`<sup>Optional</sup> <a name="OperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigs"></a>

```csharp
public object OperationConfigs { get; set; }
```

- *Type:* object

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `OperationConfigType`<sup>Optional</sup> <a name="OperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup.property.operationConfigType"></a>

```csharp
public string OperationConfigType { get; set; }
```

- *Type:* string

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigs <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigs {
    string ApiSource = null,
    object Attributes = null,
    object Operations = null,
    ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota Quota = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource">ApiSource</a></code> | <code>string</code> | Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes">Attributes</a></code> | <code>object</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations">Operations</a></code> | <code>object</code> | operations block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `ApiSource`<sup>Optional</sup> <a name="ApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource"></a>

```csharp
public string ApiSource { get; set; }
```

- *Type:* string

Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes"></a>

```csharp
public object Attributes { get; set; }
```

- *Type:* object

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations"></a>

```csharp
public object Operations { get; set; }
```

- *Type:* object

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operations ApigeeApiProduct#operations}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations {
    string Operation = null,
    string[] OperationTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation">Operation</a></code> | <code>string</code> | GraphQL operation name. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes">OperationTypes</a></code> | <code>string[]</code> | Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types. |

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

GraphQL operation name.

The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation ApigeeApiProduct#operation}

---

##### `OperationTypes`<sup>Optional</sup> <a name="OperationTypes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes"></a>

```csharp
public string[] OperationTypes { get; set; }
```

- *Type:* string[]

Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_types ApigeeApiProduct#operation_types}

---

### ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota {
    string Interval = null,
    string Limit = null,
    string TimeUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval">Interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit">Limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit">TimeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit"></a>

```csharp
public string Limit { get; set; }
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `TimeUnit`<sup>Optional</sup> <a name="TimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductGrpcOperationGroup <a name="ApigeeApiProductGrpcOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroup {
    object OperationConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.property.operationConfigs">OperationConfigs</a></code> | <code>object</code> | operation_configs block. |

---

##### `OperationConfigs`<sup>Optional</sup> <a name="OperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup.property.operationConfigs"></a>

```csharp
public object OperationConfigs { get; set; }
```

- *Type:* object

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigs <a name="ApigeeApiProductGrpcOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigs {
    string ApiSource = null,
    object Attributes = null,
    string[] Methods = null,
    ApigeeApiProductGrpcOperationGroupOperationConfigsQuota Quota = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource">ApiSource</a></code> | <code>string</code> | Required. Name of the API proxy with which the gRPC operation and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes">Attributes</a></code> | <code>object</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods">Methods</a></code> | <code>string[]</code> | List of unqualified gRPC method names for the proxy to which quota will be applied. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.service">Service</a></code> | <code>string</code> | Required. |

---

##### `ApiSource`<sup>Optional</sup> <a name="ApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource"></a>

```csharp
public string ApiSource { get; set; }
```

- *Type:* string

Required. Name of the API proxy with which the gRPC operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes"></a>

```csharp
public object Attributes { get; set; }
```

- *Type:* object

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

List of unqualified gRPC method names for the proxy to which quota will be applied.

If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy.

Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].

Note: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#methods ApigeeApiProduct#methods}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOperationConfigsQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigs.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Required.

gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#service ApigeeApiProduct#service}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductGrpcOperationGroupOperationConfigsQuota <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsQuota {
    string Interval = null,
    string Limit = null,
    string TimeUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval">Interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit">Limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit">TimeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit"></a>

```csharp
public string Limit { get; set; }
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `TimeUnit`<sup>Optional</sup> <a name="TimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductOperationGroup <a name="ApigeeApiProductOperationGroup" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroup {
    object OperationConfigs = null,
    string OperationConfigType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigs">OperationConfigs</a></code> | <code>object</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigType">OperationConfigType</a></code> | <code>string</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `OperationConfigs`<sup>Optional</sup> <a name="OperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigs"></a>

```csharp
public object OperationConfigs { get; set; }
```

- *Type:* object

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_configs ApigeeApiProduct#operation_configs}

---

##### `OperationConfigType`<sup>Optional</sup> <a name="OperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup.property.operationConfigType"></a>

```csharp
public string OperationConfigType { get; set; }
```

- *Type:* string

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operation_config_type ApigeeApiProduct#operation_config_type}

---

### ApigeeApiProductOperationGroupOperationConfigs <a name="ApigeeApiProductOperationGroupOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigs {
    string ApiSource = null,
    object Attributes = null,
    object Operations = null,
    ApigeeApiProductOperationGroupOperationConfigsQuota Quota = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.apiSource">ApiSource</a></code> | <code>string</code> | Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.attributes">Attributes</a></code> | <code>object</code> | attributes block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.operations">Operations</a></code> | <code>object</code> | operations block. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `ApiSource`<sup>Optional</sup> <a name="ApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.apiSource"></a>

```csharp
public string ApiSource { get; set; }
```

- *Type:* string

Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#api_source ApigeeApiProduct#api_source}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.attributes"></a>

```csharp
public object Attributes { get; set; }
```

- *Type:* object

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#attributes ApigeeApiProduct#attributes}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.operations"></a>

```csharp
public object Operations { get; set; }
```

- *Type:* object

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#operations ApigeeApiProduct#operations}

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigs.property.quota"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#quota ApigeeApiProduct#quota}

---

### ApigeeApiProductOperationGroupOperationConfigsAttributes <a name="ApigeeApiProductOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#name ApigeeApiProduct#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#value ApigeeApiProduct#value}

---

### ApigeeApiProductOperationGroupOperationConfigsOperations <a name="ApigeeApiProductOperationGroupOperationConfigsOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsOperations {
    string[] Methods = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.methods">Methods</a></code> | <code>string[]</code> | Methods refers to the REST verbs, when none specified, all verb types are allowed. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.resource">Resource</a></code> | <code>string</code> | Required. REST resource path associated with the API proxy or remote service. |

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

Methods refers to the REST verbs, when none specified, all verb types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#methods ApigeeApiProduct#methods}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperations.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Required. REST resource path associated with the API proxy or remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#resource ApigeeApiProduct#resource}

---

### ApigeeApiProductOperationGroupOperationConfigsQuota <a name="ApigeeApiProductOperationGroupOperationConfigsQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsQuota {
    string Interval = null,
    string Limit = null,
    string TimeUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.interval">Interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.limit">Limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit">TimeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#interval ApigeeApiProduct#interval}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.limit"></a>

```csharp
public string Limit { get; set; }
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#limit ApigeeApiProduct#limit}

---

##### `TimeUnit`<sup>Optional</sup> <a name="TimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```csharp
public string TimeUnit { get; set; }
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#time_unit ApigeeApiProduct#time_unit}

---

### ApigeeApiProductTimeouts <a name="ApigeeApiProductTimeouts" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#create ApigeeApiProduct#create}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#update ApigeeApiProduct#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#create ApigeeApiProduct#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#delete ApigeeApiProduct#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/apigee_api_product#update ApigeeApiProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeApiProductAttributesList <a name="ApigeeApiProductAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get"></a>

```csharp
private ApigeeApiProductAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductAttributesOutputReference <a name="ApigeeApiProductAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get"></a>

```csharp
private ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get"></a>

```csharp
private ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get"></a>

```csharp
private ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes">ResetOperationTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperation` <a name="ResetOperation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation"></a>

```csharp
private void ResetOperation()
```

##### `ResetOperationTypes` <a name="ResetOperationTypes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes"></a>

```csharp
private void ResetOperationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput">OperationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes">OperationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `OperationTypesInput`<sup>Optional</sup> <a name="OperationTypesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput"></a>

```csharp
public string[] OperationTypesInput { get; }
```

- *Type:* string[]

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `OperationTypes`<sup>Required</sup> <a name="OperationTypes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes"></a>

```csharp
public string[] OperationTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource">ResetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations"></a>

```csharp
private void PutOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* object

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota"></a>

```csharp
private void PutQuota(ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `ResetApiSource` <a name="ResetApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```csharp
private void ResetApiSource()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```csharp
private void ResetQuota()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput">ApiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput">OperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource">ApiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">ApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a>

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `ApiSourceInput`<sup>Optional</sup> <a name="ApiSourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```csharp
public string ApiSourceInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```csharp
public object AttributesInput { get; }
```

- *Type:* object

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```csharp
public object OperationsInput { get; }
```

- *Type:* object

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota QuotaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `ApiSource`<sup>Required</sup> <a name="ApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```csharp
public string ApiSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">ResetTimeUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetTimeUnit` <a name="ResetTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```csharp
private void ResetTimeUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit">Limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```csharp
public string LimitInput { get; }
```

- *Type:* string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```csharp
public string Limit { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">ApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductGraphqlOperationGroupOutputReference <a name="ApigeeApiProductGraphqlOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGraphqlOperationGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs">PutOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs">ResetOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType">ResetOperationConfigType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperationConfigs` <a name="PutOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs"></a>

```csharp
private void PutOperationConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetOperationConfigs` <a name="ResetOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs"></a>

```csharp
private void ResetOperationConfigs()
```

##### `ResetOperationConfigType` <a name="ResetOperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType"></a>

```csharp
private void ResetOperationConfigType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs">OperationConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput">OperationConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput">OperationConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType">OperationConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationConfigs`<sup>Required</sup> <a name="OperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroupOperationConfigsList OperationConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOperationConfigsList">ApigeeApiProductGraphqlOperationGroupOperationConfigsList</a>

---

##### `OperationConfigsInput`<sup>Optional</sup> <a name="OperationConfigsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput"></a>

```csharp
public object OperationConfigsInput { get; }
```

- *Type:* object

---

##### `OperationConfigTypeInput`<sup>Optional</sup> <a name="OperationConfigTypeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```csharp
public string OperationConfigTypeInput { get; }
```

- *Type:* string

---

##### `OperationConfigType`<sup>Required</sup> <a name="OperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType"></a>

```csharp
public string OperationConfigType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue"></a>

```csharp
public ApigeeApiProductGraphqlOperationGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGraphqlOperationGroup">ApigeeApiProductGraphqlOperationGroup</a>

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get"></a>

```csharp
private ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsList <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get"></a>

```csharp
private ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource">ResetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota"></a>

```csharp
private void PutQuota(ApigeeApiProductGrpcOperationGroupOperationConfigsQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `ResetApiSource` <a name="ResetApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```csharp
private void ResetApiSource()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods"></a>

```csharp
private void ResetMethods()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput">ApiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource">ApiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">ApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `ApiSourceInput`<sup>Optional</sup> <a name="ApiSourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```csharp
public string ApiSourceInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```csharp
public object AttributesInput { get; }
```

- *Type:* object

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOperationConfigsQuota QuotaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ApiSource`<sup>Required</sup> <a name="ApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```csharp
public string ApiSource { get; }
```

- *Type:* string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">ResetTimeUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetTimeUnit` <a name="ResetTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```csharp
private void ResetTimeUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit">Limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```csharp
public string LimitInput { get; }
```

- *Type:* string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```csharp
public string Limit { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOperationConfigsQuota InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsQuota">ApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductGrpcOperationGroupOutputReference <a name="ApigeeApiProductGrpcOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductGrpcOperationGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs">PutOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs">ResetOperationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperationConfigs` <a name="PutOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs"></a>

```csharp
private void PutOperationConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetOperationConfigs` <a name="ResetOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs"></a>

```csharp
private void ResetOperationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs">OperationConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList">ApigeeApiProductGrpcOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput">OperationConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationConfigs`<sup>Required</sup> <a name="OperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs"></a>

```csharp
public ApigeeApiProductGrpcOperationGroupOperationConfigsList OperationConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOperationConfigsList">ApigeeApiProductGrpcOperationGroupOperationConfigsList</a>

---

##### `OperationConfigsInput`<sup>Optional</sup> <a name="OperationConfigsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput"></a>

```csharp
public object OperationConfigsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue"></a>

```csharp
public ApigeeApiProductGrpcOperationGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductGrpcOperationGroup">ApigeeApiProductGrpcOperationGroup</a>

---


### ApigeeApiProductOperationGroupOperationConfigsAttributesList <a name="ApigeeApiProductOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get"></a>

```csharp
private ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductOperationGroupOperationConfigsList <a name="ApigeeApiProductOperationGroupOperationConfigsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get"></a>

```csharp
private ApigeeApiProductOperationGroupOperationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductOperationGroupOperationConfigsOperationsList <a name="ApigeeApiProductOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get"></a>

```csharp
private ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods"></a>

```csharp
private void ResetMethods()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductOperationGroupOperationConfigsOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource">ResetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations"></a>

```csharp
private void PutOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* object

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota"></a>

```csharp
private void PutQuota(ApigeeApiProductOperationGroupOperationConfigsQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `ResetApiSource` <a name="ResetApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```csharp
private void ResetApiSource()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```csharp
private void ResetQuota()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList">ApigeeApiProductOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList">ApigeeApiProductOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput">ApiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput">OperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource">ApiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsAttributesList">ApigeeApiProductOperationGroupOperationConfigsAttributesList</a>

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsOperationsList Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOperationsList">ApigeeApiProductOperationGroupOperationConfigsOperationsList</a>

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `ApiSourceInput`<sup>Optional</sup> <a name="ApiSourceInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```csharp
public string ApiSourceInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```csharp
public object AttributesInput { get; }
```

- *Type:* object

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```csharp
public object OperationsInput { get; }
```

- *Type:* object

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsQuota QuotaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `ApiSource`<sup>Required</sup> <a name="ApiSource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```csharp
public string ApiSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference <a name="ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">ResetTimeUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetTimeUnit` <a name="ResetTimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```csharp
private void ResetTimeUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">TimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit">Limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```csharp
public string LimitInput { get; }
```

- *Type:* string

---

##### `TimeUnitInput`<sup>Optional</sup> <a name="TimeUnitInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```csharp
public string TimeUnitInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```csharp
public string Limit { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsQuota InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsQuota">ApigeeApiProductOperationGroupOperationConfigsQuota</a>

---


### ApigeeApiProductOperationGroupOutputReference <a name="ApigeeApiProductOperationGroupOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductOperationGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs">PutOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigs">ResetOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigType">ResetOperationConfigType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperationConfigs` <a name="PutOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs"></a>

```csharp
private void PutOperationConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetOperationConfigs` <a name="ResetOperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigs"></a>

```csharp
private void ResetOperationConfigs()
```

##### `ResetOperationConfigType` <a name="ResetOperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.resetOperationConfigType"></a>

```csharp
private void ResetOperationConfigType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigs">OperationConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList">ApigeeApiProductOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput">OperationConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput">OperationConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigType">OperationConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationConfigs`<sup>Required</sup> <a name="OperationConfigs" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigs"></a>

```csharp
public ApigeeApiProductOperationGroupOperationConfigsList OperationConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOperationConfigsList">ApigeeApiProductOperationGroupOperationConfigsList</a>

---

##### `OperationConfigsInput`<sup>Optional</sup> <a name="OperationConfigsInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput"></a>

```csharp
public object OperationConfigsInput { get; }
```

- *Type:* object

---

##### `OperationConfigTypeInput`<sup>Optional</sup> <a name="OperationConfigTypeInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```csharp
public string OperationConfigTypeInput { get; }
```

- *Type:* string

---

##### `OperationConfigType`<sup>Required</sup> <a name="OperationConfigType" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.operationConfigType"></a>

```csharp
public string OperationConfigType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroupOutputReference.property.internalValue"></a>

```csharp
public ApigeeApiProductOperationGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductOperationGroup">ApigeeApiProductOperationGroup</a>

---


### ApigeeApiProductTimeoutsOutputReference <a name="ApigeeApiProductTimeoutsOutputReference" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeApiProductTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeApiProduct.ApigeeApiProductTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



