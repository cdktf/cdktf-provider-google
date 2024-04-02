# `apigeeKeystoresAliasesKeyCertFile` Submodule <a name="`apigeeKeystoresAliasesKeyCertFile` Submodule" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesKeyCertFile <a name="ApigeeKeystoresAliasesKeyCertFile" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFile(Construct Scope, string Id, ApigeeKeystoresAliasesKeyCertFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig">ApigeeKeystoresAliasesKeyCertFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig">ApigeeKeystoresAliasesKeyCertFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putCertsInfo">PutCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetCertsInfo">ResetCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertsInfo` <a name="PutCertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putCertsInfo"></a>

```csharp
private void PutCertsInfo(ApigeeKeystoresAliasesKeyCertFileCertsInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putCertsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeKeystoresAliasesKeyCertFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `ResetCertsInfo` <a name="ResetCertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetCertsInfo"></a>

```csharp
private void ResetCertsInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeKeystoresAliasesKeyCertFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeKeystoresAliasesKeyCertFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeKeystoresAliasesKeyCertFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeKeystoresAliasesKeyCertFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeKeystoresAliasesKeyCertFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeKeystoresAliasesKeyCertFile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeKeystoresAliasesKeyCertFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeKeystoresAliasesKeyCertFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesKeyCertFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfo">CertsInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference">ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfoInput">CertsInfoInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystoreInput">KeystoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystore">Keystore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.password">Password</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertsInfo`<sup>Required</sup> <a name="CertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfo"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference CertsInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference">ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeouts"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `CertsInfoInput`<sup>Optional</sup> <a name="CertsInfoInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfoInput"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileCertsInfo CertsInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KeystoreInput`<sup>Optional</sup> <a name="KeystoreInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystoreInput"></a>

```csharp
public string KeystoreInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystore"></a>

```csharp
public string Keystore { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesKeyCertFileCertsInfo <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileCertsInfo {
    object CertInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo.property.certInfo">CertInfo</a></code> | <code>object</code> | cert_info block. |

---

##### `CertInfo`<sup>Optional</sup> <a name="CertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo.property.certInfo"></a>

```csharp
public object CertInfo { get; set; }
```

- *Type:* object

cert_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert_info ApigeeKeystoresAliasesKeyCertFile#cert_info}

---

### ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo {
    string BasicConstraints = null,
    string ExpiryDate = null,
    string Issuer = null,
    string IsValid = null,
    string PublicKey = null,
    string SerialNumber = null,
    string SigAlgName = null,
    string Subject = null,
    string[] SubjectAlternativeNames = null,
    string ValidFrom = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.basicConstraints">BasicConstraints</a></code> | <code>string</code> | X.509 basic constraints extension. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.expiryDate">ExpiryDate</a></code> | <code>string</code> | X.509 notAfter validity period in milliseconds since epoch. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.issuer">Issuer</a></code> | <code>string</code> | X.509 issuer. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.isValid">IsValid</a></code> | <code>string</code> | Flag that specifies whether the certificate is valid. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key component of the X.509 subject public key info. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.serialNumber">SerialNumber</a></code> | <code>string</code> | X.509 serial number. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.sigAlgName">SigAlgName</a></code> | <code>string</code> | X.509 signatureAlgorithm. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subject">Subject</a></code> | <code>string</code> | X.509 subject. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | X.509 subject alternative names (SANs) extension. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.validFrom">ValidFrom</a></code> | <code>string</code> | X.509 notBefore validity period in milliseconds since epoch. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.version">Version</a></code> | <code>double</code> | X.509 version. |

---

##### `BasicConstraints`<sup>Optional</sup> <a name="BasicConstraints" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.basicConstraints"></a>

```csharp
public string BasicConstraints { get; set; }
```

- *Type:* string

X.509 basic constraints extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#basic_constraints ApigeeKeystoresAliasesKeyCertFile#basic_constraints}

---

##### `ExpiryDate`<sup>Optional</sup> <a name="ExpiryDate" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.expiryDate"></a>

```csharp
public string ExpiryDate { get; set; }
```

- *Type:* string

X.509 notAfter validity period in milliseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#expiry_date ApigeeKeystoresAliasesKeyCertFile#expiry_date}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

X.509 issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#issuer ApigeeKeystoresAliasesKeyCertFile#issuer}

---

##### `IsValid`<sup>Optional</sup> <a name="IsValid" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.isValid"></a>

```csharp
public string IsValid { get; set; }
```

- *Type:* string

Flag that specifies whether the certificate is valid.

Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#is_valid ApigeeKeystoresAliasesKeyCertFile#is_valid}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key component of the X.509 subject public key info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#public_key ApigeeKeystoresAliasesKeyCertFile#public_key}

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.serialNumber"></a>

```csharp
public string SerialNumber { get; set; }
```

- *Type:* string

X.509 serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#serial_number ApigeeKeystoresAliasesKeyCertFile#serial_number}

---

##### `SigAlgName`<sup>Optional</sup> <a name="SigAlgName" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.sigAlgName"></a>

```csharp
public string SigAlgName { get; set; }
```

- *Type:* string

X.509 signatureAlgorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#sig_alg_name ApigeeKeystoresAliasesKeyCertFile#sig_alg_name}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

X.509 subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#subject ApigeeKeystoresAliasesKeyCertFile#subject}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; set; }
```

- *Type:* string[]

X.509 subject alternative names (SANs) extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#subject_alternative_names ApigeeKeystoresAliasesKeyCertFile#subject_alternative_names}

---

##### `ValidFrom`<sup>Optional</sup> <a name="ValidFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.validFrom"></a>

```csharp
public string ValidFrom { get; set; }
```

- *Type:* string

X.509 notBefore validity period in milliseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#valid_from ApigeeKeystoresAliasesKeyCertFile#valid_from}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

X.509 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#version ApigeeKeystoresAliasesKeyCertFile#version}

---

### ApigeeKeystoresAliasesKeyCertFileConfig <a name="ApigeeKeystoresAliasesKeyCertFileConfig" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Alias,
    string Cert,
    string Environment,
    string Keystore,
    string OrgId,
    ApigeeKeystoresAliasesKeyCertFileCertsInfo CertsInfo = null,
    string Id = null,
    string Key = null,
    string Password = null,
    ApigeeKeystoresAliasesKeyCertFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.alias">Alias</a></code> | <code>string</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.cert">Cert</a></code> | <code>string</code> | Cert content. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.environment">Environment</a></code> | <code>string</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.keystore">Keystore</a></code> | <code>string</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.orgId">OrgId</a></code> | <code>string</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.certsInfo">CertsInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | certs_info block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#id ApigeeKeystoresAliasesKeyCertFile#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.key">Key</a></code> | <code>string</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.password">Password</a></code> | <code>string</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#alias ApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert ApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#environment ApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.keystore"></a>

```csharp
public string Keystore { get; set; }
```

- *Type:* string

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#keystore ApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#org_id ApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `CertsInfo`<sup>Optional</sup> <a name="CertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.certsInfo"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileCertsInfo CertsInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

certs_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#certs_info ApigeeKeystoresAliasesKeyCertFile#certs_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#id ApigeeKeystoresAliasesKeyCertFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#key ApigeeKeystoresAliasesKeyCertFile#key}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#password ApigeeKeystoresAliasesKeyCertFile#password}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#timeouts ApigeeKeystoresAliasesKeyCertFile#timeouts}

---

### ApigeeKeystoresAliasesKeyCertFileTimeouts <a name="ApigeeKeystoresAliasesKeyCertFileTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#create ApigeeKeystoresAliasesKeyCertFile#create}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#delete ApigeeKeystoresAliasesKeyCertFile#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#read ApigeeKeystoresAliasesKeyCertFile#read}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#update ApigeeKeystoresAliasesKeyCertFile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#create ApigeeKeystoresAliasesKeyCertFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#delete ApigeeKeystoresAliasesKeyCertFile#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#read ApigeeKeystoresAliasesKeyCertFile#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/apigee_keystores_aliases_key_cert_file#update ApigeeKeystoresAliasesKeyCertFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get"></a>

```csharp
private ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetBasicConstraints">ResetBasicConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetExpiryDate">ResetExpiryDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIsValid">ResetIsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSigAlgName">ResetSigAlgName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetValidFrom">ResetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBasicConstraints` <a name="ResetBasicConstraints" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetBasicConstraints"></a>

```csharp
private void ResetBasicConstraints()
```

##### `ResetExpiryDate` <a name="ResetExpiryDate" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetExpiryDate"></a>

```csharp
private void ResetExpiryDate()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetIsValid` <a name="ResetIsValid" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetIsValid"></a>

```csharp
private void ResetIsValid()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSerialNumber"></a>

```csharp
private void ResetSerialNumber()
```

##### `ResetSigAlgName` <a name="ResetSigAlgName" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSigAlgName"></a>

```csharp
private void ResetSigAlgName()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```

##### `ResetValidFrom` <a name="ResetValidFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetValidFrom"></a>

```csharp
private void ResetValidFrom()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraintsInput">BasicConstraintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDateInput">ExpiryDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValidInput">IsValidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgNameInput">SigAlgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFromInput">ValidFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraints">BasicConstraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDate">ExpiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValid">IsValid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgName">SigAlgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFrom">ValidFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicConstraintsInput`<sup>Optional</sup> <a name="BasicConstraintsInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraintsInput"></a>

```csharp
public string BasicConstraintsInput { get; }
```

- *Type:* string

---

##### `ExpiryDateInput`<sup>Optional</sup> <a name="ExpiryDateInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDateInput"></a>

```csharp
public string ExpiryDateInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `IsValidInput`<sup>Optional</sup> <a name="IsValidInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValidInput"></a>

```csharp
public string IsValidInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumberInput"></a>

```csharp
public string SerialNumberInput { get; }
```

- *Type:* string

---

##### `SigAlgNameInput`<sup>Optional</sup> <a name="SigAlgNameInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgNameInput"></a>

```csharp
public string SigAlgNameInput { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNamesInput"></a>

```csharp
public string[] SubjectAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `ValidFromInput`<sup>Optional</sup> <a name="ValidFromInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFromInput"></a>

```csharp
public string ValidFromInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `BasicConstraints`<sup>Required</sup> <a name="BasicConstraints" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```csharp
public string BasicConstraints { get; }
```

- *Type:* string

---

##### `ExpiryDate`<sup>Required</sup> <a name="ExpiryDate" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```csharp
public string ExpiryDate { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.isValid"></a>

```csharp
public string IsValid { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `SigAlgName`<sup>Required</sup> <a name="SigAlgName" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```csharp
public string SigAlgName { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.validFrom"></a>

```csharp
public string ValidFrom { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo">PutCertInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resetCertInfo">ResetCertInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertInfo` <a name="PutCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo"></a>

```csharp
private void PutCertInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.putCertInfo.parameter.value"></a>

- *Type:* object

---

##### `ResetCertInfo` <a name="ResetCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resetCertInfo"></a>

```csharp
private void ResetCertInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfo">CertInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList">ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfoInput">CertInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInfo`<sup>Required</sup> <a name="CertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfo"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList CertInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList">ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList</a>

---

##### `CertInfoInput`<sup>Optional</sup> <a name="CertInfoInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.certInfoInput"></a>

```csharp
public object CertInfoInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue"></a>

```csharp
public ApigeeKeystoresAliasesKeyCertFileCertsInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---


### ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



