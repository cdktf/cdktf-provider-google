# `cloudbuildTrigger` Submodule <a name="`cloudbuildTrigger` Submodule" id="@cdktf/provider-google.cloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildTrigger <a name="CloudbuildTrigger" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTrigger(Construct Scope, string Id, CloudbuildTriggerConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig">CloudbuildTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig">CloudbuildTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig">PutApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig">PutBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute">PutBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource">PutGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig">PutPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putRepositoryEventConfig">PutRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild">PutSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate">PutTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig">PutWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig">ResetApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBitbucketServerTriggerConfig">ResetBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename">ResetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource">ResetGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles">ResetIgnoredFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs">ResetIncludeBuildLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles">ResetIncludedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig">ResetPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetRepositoryEventConfig">ResetRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild">ResetSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate">ResetTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig">ResetWebhookConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalConfig` <a name="PutApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig"></a>

```csharp
private void PutApprovalConfig(CloudbuildTriggerApprovalConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putApprovalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `PutBitbucketServerTriggerConfig` <a name="PutBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig"></a>

```csharp
private void PutBitbucketServerTriggerConfig(CloudbuildTriggerBitbucketServerTriggerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBitbucketServerTriggerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `PutBuildAttribute` <a name="PutBuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute"></a>

```csharp
private void PutBuildAttribute(CloudbuildTriggerBuild Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `PutGitFileSource` <a name="PutGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource"></a>

```csharp
private void PutGitFileSource(CloudbuildTriggerGitFileSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGitFileSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub"></a>

```csharp
private void PutGithub(CloudbuildTriggerGithub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `PutPubsubConfig` <a name="PutPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig"></a>

```csharp
private void PutPubsubConfig(CloudbuildTriggerPubsubConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putPubsubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `PutRepositoryEventConfig` <a name="PutRepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putRepositoryEventConfig"></a>

```csharp
private void PutRepositoryEventConfig(CloudbuildTriggerRepositoryEventConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putRepositoryEventConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

---

##### `PutSourceToBuild` <a name="PutSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild"></a>

```csharp
private void PutSourceToBuild(CloudbuildTriggerSourceToBuild Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putSourceToBuild.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudbuildTriggerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

---

##### `PutTriggerTemplate` <a name="PutTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate"></a>

```csharp
private void PutTriggerTemplate(CloudbuildTriggerTriggerTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putTriggerTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `PutWebhookConfig` <a name="PutWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig"></a>

```csharp
private void PutWebhookConfig(CloudbuildTriggerWebhookConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.putWebhookConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `ResetApprovalConfig` <a name="ResetApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetApprovalConfig"></a>

```csharp
private void ResetApprovalConfig()
```

##### `ResetBitbucketServerTriggerConfig` <a name="ResetBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBitbucketServerTriggerConfig"></a>

```csharp
private void ResetBitbucketServerTriggerConfig()
```

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetBuildAttribute"></a>

```csharp
private void ResetBuildAttribute()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilename"></a>

```csharp
private void ResetFilename()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGitFileSource` <a name="ResetGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGitFileSource"></a>

```csharp
private void ResetGitFileSource()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoredFiles` <a name="ResetIgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIgnoredFiles"></a>

```csharp
private void ResetIgnoredFiles()
```

##### `ResetIncludeBuildLogs` <a name="ResetIncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludeBuildLogs"></a>

```csharp
private void ResetIncludeBuildLogs()
```

##### `ResetIncludedFiles` <a name="ResetIncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetIncludedFiles"></a>

```csharp
private void ResetIncludedFiles()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPubsubConfig` <a name="ResetPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetPubsubConfig"></a>

```csharp
private void ResetPubsubConfig()
```

##### `ResetRepositoryEventConfig` <a name="ResetRepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetRepositoryEventConfig"></a>

```csharp
private void ResetRepositoryEventConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetSourceToBuild` <a name="ResetSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSourceToBuild"></a>

```csharp
private void ResetSourceToBuild()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetSubstitutions"></a>

```csharp
private void ResetSubstitutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggerTemplate` <a name="ResetTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetTriggerTemplate"></a>

```csharp
private void ResetTriggerTemplate()
```

##### `ResetWebhookConfig` <a name="ResetWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.resetWebhookConfig"></a>

```csharp
private void ResetWebhookConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudbuildTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudbuildTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudbuildTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudbuildTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudbuildTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudbuildTrigger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudbuildTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudbuildTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudbuildTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfig">RepositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference">CloudbuildTriggerRepositoryEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId">TriggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput">ApprovalConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfigInput">BitbucketServerTriggerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput">BuildAttributeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput">GitFileSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput">GithubInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput">IgnoredFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput">IncludeBuildLogsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput">IncludedFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput">PubsubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfigInput">RepositoryEventConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput">SourceToBuildInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput">SubstitutionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput">TriggerTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput">WebhookConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles">IgnoredFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles">IncludedFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions">Substitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalConfig`<sup>Required</sup> <a name="ApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfig"></a>

```csharp
public CloudbuildTriggerApprovalConfigOutputReference ApprovalConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference">CloudbuildTriggerApprovalConfigOutputReference</a>

---

##### `BitbucketServerTriggerConfig`<sup>Required</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigOutputReference BitbucketServerTriggerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigOutputReference</a>

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttribute"></a>

```csharp
public CloudbuildTriggerBuildOutputReference BuildAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference">CloudbuildTriggerBuildOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `GitFileSource`<sup>Required</sup> <a name="GitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSource"></a>

```csharp
public CloudbuildTriggerGitFileSourceOutputReference GitFileSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference">CloudbuildTriggerGitFileSourceOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.github"></a>

```csharp
public CloudbuildTriggerGithubOutputReference Github { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference">CloudbuildTriggerGithubOutputReference</a>

---

##### `PubsubConfig`<sup>Required</sup> <a name="PubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfig"></a>

```csharp
public CloudbuildTriggerPubsubConfigOutputReference PubsubConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference">CloudbuildTriggerPubsubConfigOutputReference</a>

---

##### `RepositoryEventConfig`<sup>Required</sup> <a name="RepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfig"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigOutputReference RepositoryEventConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference">CloudbuildTriggerRepositoryEventConfigOutputReference</a>

---

##### `SourceToBuild`<sup>Required</sup> <a name="SourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuild"></a>

```csharp
public CloudbuildTriggerSourceToBuildOutputReference SourceToBuild { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference">CloudbuildTriggerSourceToBuildOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeouts"></a>

```csharp
public CloudbuildTriggerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference">CloudbuildTriggerTimeoutsOutputReference</a>

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerId"></a>

```csharp
public string TriggerId { get; }
```

- *Type:* string

---

##### `TriggerTemplate`<sup>Required</sup> <a name="TriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplate"></a>

```csharp
public CloudbuildTriggerTriggerTemplateOutputReference TriggerTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference">CloudbuildTriggerTriggerTemplateOutputReference</a>

---

##### `WebhookConfig`<sup>Required</sup> <a name="WebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfig"></a>

```csharp
public CloudbuildTriggerWebhookConfigOutputReference WebhookConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference">CloudbuildTriggerWebhookConfigOutputReference</a>

---

##### `ApprovalConfigInput`<sup>Optional</sup> <a name="ApprovalConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.approvalConfigInput"></a>

```csharp
public CloudbuildTriggerApprovalConfig ApprovalConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---

##### `BitbucketServerTriggerConfigInput`<sup>Optional</sup> <a name="BitbucketServerTriggerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.bitbucketServerTriggerConfigInput"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfig BitbucketServerTriggerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.buildAttributeInput"></a>

```csharp
public CloudbuildTriggerBuild BuildAttributeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `GitFileSourceInput`<sup>Optional</sup> <a name="GitFileSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.gitFileSourceInput"></a>

```csharp
public CloudbuildTriggerGitFileSource GitFileSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.githubInput"></a>

```csharp
public CloudbuildTriggerGithub GithubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoredFilesInput`<sup>Optional</sup> <a name="IgnoredFilesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFilesInput"></a>

```csharp
public string[] IgnoredFilesInput { get; }
```

- *Type:* string[]

---

##### `IncludeBuildLogsInput`<sup>Optional</sup> <a name="IncludeBuildLogsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogsInput"></a>

```csharp
public string IncludeBuildLogsInput { get; }
```

- *Type:* string

---

##### `IncludedFilesInput`<sup>Optional</sup> <a name="IncludedFilesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFilesInput"></a>

```csharp
public string[] IncludedFilesInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PubsubConfigInput`<sup>Optional</sup> <a name="PubsubConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.pubsubConfigInput"></a>

```csharp
public CloudbuildTriggerPubsubConfig PubsubConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---

##### `RepositoryEventConfigInput`<sup>Optional</sup> <a name="RepositoryEventConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.repositoryEventConfigInput"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfig RepositoryEventConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `SourceToBuildInput`<sup>Optional</sup> <a name="SourceToBuildInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.sourceToBuildInput"></a>

```csharp
public CloudbuildTriggerSourceToBuild SourceToBuildInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SubstitutionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggerTemplateInput`<sup>Optional</sup> <a name="TriggerTemplateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.triggerTemplateInput"></a>

```csharp
public CloudbuildTriggerTriggerTemplate TriggerTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---

##### `WebhookConfigInput`<sup>Optional</sup> <a name="WebhookConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.webhookConfigInput"></a>

```csharp
public CloudbuildTriggerWebhookConfig WebhookConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoredFiles`<sup>Required</sup> <a name="IgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.ignoredFiles"></a>

```csharp
public string[] IgnoredFiles { get; }
```

- *Type:* string[]

---

##### `IncludeBuildLogs`<sup>Required</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includeBuildLogs"></a>

```csharp
public string IncludeBuildLogs { get; }
```

- *Type:* string

---

##### `IncludedFiles`<sup>Required</sup> <a name="IncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.includedFiles"></a>

```csharp
public string[] IncludedFiles { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.substitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Substitutions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildTriggerApprovalConfig <a name="CloudbuildTriggerApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerApprovalConfig {
    object ApprovalRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | Whether or not approval is needed. |

---

##### `ApprovalRequired`<sup>Optional</sup> <a name="ApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; set; }
```

- *Type:* object

Whether or not approval is needed.

If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#approval_required CloudbuildTrigger#approval_required}

---

### CloudbuildTriggerBitbucketServerTriggerConfig <a name="CloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBitbucketServerTriggerConfig {
    string BitbucketServerConfigResource,
    string ProjectKey,
    string RepoSlug,
    CloudbuildTriggerBitbucketServerTriggerConfigPullRequest PullRequest = null,
    CloudbuildTriggerBitbucketServerTriggerConfigPush Push = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>string</code> | The Bitbucket server config resource that this trigger config maps to. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug">RepoSlug</a></code> | <code>string</code> | Slug of the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | push block. |

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.bitbucketServerConfigResource"></a>

```csharp
public string BitbucketServerConfigResource { get; set; }
```

- *Type:* string

The Bitbucket server config resource that this trigger config maps to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#bitbucket_server_config_resource CloudbuildTrigger#bitbucket_server_config_resource}

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#project_key CloudbuildTrigger#project_key}

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.repoSlug"></a>

```csharp
public string RepoSlug { get; set; }
```

- *Type:* string

Slug of the repository.

A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repo_slug CloudbuildTrigger#repo_slug}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.pullRequest"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequest PullRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig.property.push"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPush Push { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="CloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBitbucketServerTriggerConfigPullRequest {
    string Branch,
    string CommentControl = null,
    object InvertRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch">Branch</a></code> | <code>string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl">CommentControl</a></code> | <code>string</code> | Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex">InvertRegex</a></code> | <code>object</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.commentControl"></a>

```csharp
public string CommentControl { get; set; }
```

- *Type:* string

Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerBitbucketServerTriggerConfigPush <a name="CloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBitbucketServerTriggerConfigPush {
    string Branch = null,
    object InvertRegex = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch">Branch</a></code> | <code>string</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex">InvertRegex</a></code> | <code>object</code> | When true, only trigger a build if the revision regex does NOT match the gitRef regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag">Tag</a></code> | <code>string</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

When true, only trigger a build if the revision regex does NOT match the gitRef regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerBuild <a name="CloudbuildTriggerBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuild {
    object Step,
    CloudbuildTriggerBuildArtifacts Artifacts = null,
    CloudbuildTriggerBuildAvailableSecrets AvailableSecrets = null,
    string[] Images = null,
    string LogsBucket = null,
    CloudbuildTriggerBuildOptions Options = null,
    string QueueTtl = null,
    object Secret = null,
    CloudbuildTriggerBuildSource Source = null,
    System.Collections.Generic.IDictionary<string, string> Substitutions = null,
    string[] Tags = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step">Step</a></code> | <code>object</code> | step block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | available_secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images">Images</a></code> | <code>string[]</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket">LogsBucket</a></code> | <code>string</code> | Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logsBucket}/log-${build_id}.txt. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl">QueueTtl</a></code> | <code>string</code> | TTL in queue for this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions">Substitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags">Tags</a></code> | <code>string[]</code> | Tags for annotation of a Build. These are not docker tags. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout">Timeout</a></code> | <code>string</code> | Amount of time that this build should be allowed to run, to second granularity. |

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.step"></a>

```csharp
public object Step { get; set; }
```

- *Type:* object

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#step CloudbuildTrigger#step}

---

##### `Artifacts`<sup>Optional</sup> <a name="Artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.artifacts"></a>

```csharp
public CloudbuildTriggerBuildArtifacts Artifacts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#artifacts CloudbuildTrigger#artifacts}

---

##### `AvailableSecrets`<sup>Optional</sup> <a name="AvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.availableSecrets"></a>

```csharp
public CloudbuildTriggerBuildAvailableSecrets AvailableSecrets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

available_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#available_secrets CloudbuildTrigger#available_secrets}

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.images"></a>

```csharp
public string[] Images { get; set; }
```

- *Type:* string[]

A list of images to be pushed upon the successful completion of all build steps.

The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `LogsBucket`<sup>Optional</sup> <a name="LogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.logsBucket"></a>

```csharp
public string LogsBucket { get; set; }
```

- *Type:* string

Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#logs_bucket CloudbuildTrigger#logs_bucket}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.options"></a>

```csharp
public CloudbuildTriggerBuildOptions Options { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#options CloudbuildTrigger#options}

---

##### `QueueTtl`<sup>Optional</sup> <a name="QueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.queueTtl"></a>

```csharp
public string QueueTtl { get; set; }
```

- *Type:* string

TTL in queue for this build.

If provided and the build is enqueued longer than this value,
the build will expire and the build status will be EXPIRED.
The TTL starts ticking from createTime.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#queue_ttl CloudbuildTrigger#queue_ttl}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.source"></a>

```csharp
public CloudbuildTriggerBuildSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#source CloudbuildTrigger#source}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.substitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Substitutions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags for annotation of a Build. These are not docker tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Amount of time that this build should be allowed to run, to second granularity.

If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

### CloudbuildTriggerBuildArtifacts <a name="CloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifacts {
    string[] Images = null,
    object MavenArtifacts = null,
    object NpmPackages = null,
    CloudbuildTriggerBuildArtifactsObjects Objects = null,
    object PythonPackages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images">Images</a></code> | <code>string[]</code> | A list of images to be pushed upon the successful completion of all build steps. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.mavenArtifacts">MavenArtifacts</a></code> | <code>object</code> | maven_artifacts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.npmPackages">NpmPackages</a></code> | <code>object</code> | npm_packages block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | objects block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.pythonPackages">PythonPackages</a></code> | <code>object</code> | python_packages block. |

---

##### `Images`<sup>Optional</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.images"></a>

```csharp
public string[] Images { get; set; }
```

- *Type:* string[]

A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#images CloudbuildTrigger#images}

---

##### `MavenArtifacts`<sup>Optional</sup> <a name="MavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.mavenArtifacts"></a>

```csharp
public object MavenArtifacts { get; set; }
```

- *Type:* object

maven_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#maven_artifacts CloudbuildTrigger#maven_artifacts}

---

##### `NpmPackages`<sup>Optional</sup> <a name="NpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.npmPackages"></a>

```csharp
public object NpmPackages { get; set; }
```

- *Type:* object

npm_packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#npm_packages CloudbuildTrigger#npm_packages}

---

##### `Objects`<sup>Optional</sup> <a name="Objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.objects"></a>

```csharp
public CloudbuildTriggerBuildArtifactsObjects Objects { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#objects CloudbuildTrigger#objects}

---

##### `PythonPackages`<sup>Optional</sup> <a name="PythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts.property.pythonPackages"></a>

```csharp
public object PythonPackages { get; set; }
```

- *Type:* object

python_packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#python_packages CloudbuildTrigger#python_packages}

---

### CloudbuildTriggerBuildArtifactsMavenArtifacts <a name="CloudbuildTriggerBuildArtifactsMavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsMavenArtifacts {
    string ArtifactId = null,
    string GroupId = null,
    string Path = null,
    string Repository = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.artifactId">ArtifactId</a></code> | <code>string</code> | Maven artifactId value used when uploading the artifact to Artifact Registry. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.groupId">GroupId</a></code> | <code>string</code> | Maven groupId value used when uploading the artifact to Artifact Registry. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.path">Path</a></code> | <code>string</code> | Path to an artifact in the build's workspace to be uploaded to Artifact Registry. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.repository">Repository</a></code> | <code>string</code> | Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.version">Version</a></code> | <code>string</code> | Maven version value used when uploading the artifact to Artifact Registry. |

---

##### `ArtifactId`<sup>Optional</sup> <a name="ArtifactId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.artifactId"></a>

```csharp
public string ArtifactId { get; set; }
```

- *Type:* string

Maven artifactId value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#artifact_id CloudbuildTrigger#artifact_id}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Maven groupId value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#group_id CloudbuildTrigger#group_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to an artifact in the build's workspace to be uploaded to Artifact Registry.

This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY".

Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifacts.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Maven version value used when uploading the artifact to Artifact Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#version CloudbuildTrigger#version}

---

### CloudbuildTriggerBuildArtifactsNpmPackages <a name="CloudbuildTriggerBuildArtifactsNpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsNpmPackages {
    string PackagePath = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.packagePath">PackagePath</a></code> | <code>string</code> | Path to the package.json. e.g. workspace/path/to/package. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.repository">Repository</a></code> | <code>string</code> | Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY". |

---

##### `PackagePath`<sup>Optional</sup> <a name="PackagePath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.packagePath"></a>

```csharp
public string PackagePath { get; set; }
```

- *Type:* string

Path to the package.json. e.g. workspace/path/to/package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#package_path CloudbuildTrigger#package_path}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackages.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY".

Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

### CloudbuildTriggerBuildArtifactsObjects <a name="CloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsObjects {
    string Location = null,
    string[] Paths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location">Location</a></code> | <code>string</code> | Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths">Paths</a></code> | <code>string[]</code> | Path globs used to match files in the build's workspace. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".

Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Path globs used to match files in the build's workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

### CloudbuildTriggerBuildArtifactsObjectsTiming <a name="CloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsObjectsTiming {

};
```


### CloudbuildTriggerBuildArtifactsPythonPackages <a name="CloudbuildTriggerBuildArtifactsPythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsPythonPackages {
    string[] Paths = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.paths">Paths</a></code> | <code>string[]</code> | Path globs used to match files in the build's workspace. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.repository">Repository</a></code> | <code>string</code> | Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY". |

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Path globs used to match files in the build's workspace.

For Python/ Twine, this is usually dist/*, and sometimes additionally an .asc file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#paths CloudbuildTrigger#paths}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackages.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY".

Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

### CloudbuildTriggerBuildAvailableSecrets <a name="CloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildAvailableSecrets {
    object SecretManager
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager">SecretManager</a></code> | <code>object</code> | secret_manager block. |

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets.property.secretManager"></a>

```csharp
public object SecretManager { get; set; }
```

- *Type:* object

secret_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#secret_manager CloudbuildTrigger#secret_manager}

---

### CloudbuildTriggerBuildAvailableSecretsSecretManager <a name="CloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildAvailableSecretsSecretManager {
    string Env,
    string VersionName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env">Env</a></code> | <code>string</code> | Environment variable name to associate with the secret. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName">VersionName</a></code> | <code>string</code> | Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*. |

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.env"></a>

```csharp
public string Env { get; set; }
```

- *Type:* string

Environment variable name to associate with the secret.

Secret environment
variables must be unique across all of a build's secrets, and must be used
by at least one build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManager.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#version_name CloudbuildTrigger#version_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### CloudbuildTriggerBuildOptions <a name="CloudbuildTriggerBuildOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildOptions {
    double DiskSizeGb = null,
    object DynamicSubstitutions = null,
    string[] Env = null,
    string Logging = null,
    string LogStreamingOption = null,
    string MachineType = null,
    string RequestedVerifyOption = null,
    string[] SecretEnv = null,
    string[] SourceProvenanceHash = null,
    string SubstitutionOption = null,
    object Volumes = null,
    string WorkerPool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Requested disk size for the VM that runs the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>object</code> | Option to specify whether or not to apply bash style string operations to the substitutions. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env">Env</a></code> | <code>string[]</code> | A list of global environment variable definitions that will exist for all build steps in this build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging">Logging</a></code> | <code>string</code> | Option to specify the logging mode, which determines if and where build logs are stored. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption">LogStreamingOption</a></code> | <code>string</code> | Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType">MachineType</a></code> | <code>string</code> | Compute Engine machine type on which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>string</code> | Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv">SecretEnv</a></code> | <code>string[]</code> | A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>string[]</code> | Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption">SubstitutionOption</a></code> | <code>string</code> | Option to specify behavior when there is an error in the substitution checks. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes">Volumes</a></code> | <code>object</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool">WorkerPool</a></code> | <code>string</code> | Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Requested disk size for the VM that runs the build.

Note that this is NOT "disk free";
some of the space will be used by the operating system and build utilities.
Also note that this is the minimum disk size that will be allocated for the build --
the build may run with a larger disk than requested. At present, the maximum disk size
is 1000GB; builds that request more than the maximum are rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#disk_size_gb CloudbuildTrigger#disk_size_gb}

---

##### `DynamicSubstitutions`<sup>Optional</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.dynamicSubstitutions"></a>

```csharp
public object DynamicSubstitutions { get; set; }
```

- *Type:* object

Option to specify whether or not to apply bash style string operations to the substitutions.

NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#dynamic_substitutions CloudbuildTrigger#dynamic_substitutions}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.env"></a>

```csharp
public string[] Env { get; set; }
```

- *Type:* string[]

A list of global environment variable definitions that will exist for all build steps in this build.

If a variable is defined in both globally and in a build step,
the variable will use the build step value.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logging"></a>

```csharp
public string Logging { get; set; }
```

- *Type:* string

Option to specify the logging mode, which determines if and where build logs are stored.

Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#logging CloudbuildTrigger#logging}

---

##### `LogStreamingOption`<sup>Optional</sup> <a name="LogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.logStreamingOption"></a>

```csharp
public string LogStreamingOption { get; set; }
```

- *Type:* string

Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#log_streaming_option CloudbuildTrigger#log_streaming_option}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

Compute Engine machine type on which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#machine_type CloudbuildTrigger#machine_type}

---

##### `RequestedVerifyOption`<sup>Optional</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.requestedVerifyOption"></a>

```csharp
public string RequestedVerifyOption { get; set; }
```

- *Type:* string

Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#requested_verify_option CloudbuildTrigger#requested_verify_option}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.secretEnv"></a>

```csharp
public string[] SecretEnv { get; set; }
```

- *Type:* string[]

A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in the build's Secret. These variables
will be available to all build steps in this build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `SourceProvenanceHash`<sup>Optional</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.sourceProvenanceHash"></a>

```csharp
public string[] SourceProvenanceHash { get; set; }
```

- *Type:* string[]

Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#source_provenance_hash CloudbuildTrigger#source_provenance_hash}

---

##### `SubstitutionOption`<sup>Optional</sup> <a name="SubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.substitutionOption"></a>

```csharp
public string SubstitutionOption { get; set; }
```

- *Type:* string

Option to specify behavior when there is an error in the substitution checks.

NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#substitution_option CloudbuildTrigger#substitution_option}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.volumes"></a>

```csharp
public object Volumes { get; set; }
```

- *Type:* object

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions.property.workerPool"></a>

```csharp
public string WorkerPool { get; set; }
```

- *Type:* string

Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}.

This field is experimental.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#worker_pool CloudbuildTrigger#worker_pool}

---

### CloudbuildTriggerBuildOptionsVolumes <a name="CloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildOptionsVolumes {
    string Name = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name">Name</a></code> | <code>string</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path">Path</a></code> | <code>string</code> | Path at which to mount the volume. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for Docker volumes.
Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumes.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on the same
build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerBuildSecret <a name="CloudbuildTriggerBuildSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSecret {
    string KmsKeyName,
    System.Collections.Generic.IDictionary<string, string> SecretEnv = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Cloud KMS key name to use to decrypt these envs. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv">SecretEnv</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of environment variable name to its encrypted value. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Cloud KMS key name to use to decrypt these envs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#kms_key_name CloudbuildTrigger#kms_key_name}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecret.property.secretEnv"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretEnv { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of environment variable name to its encrypted value.

Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

### CloudbuildTriggerBuildSource <a name="CloudbuildTriggerBuildSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSource {
    CloudbuildTriggerBuildSourceRepoSource RepoSource = null,
    CloudbuildTriggerBuildSourceStorageSource StorageSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | storage_source block. |

---

##### `RepoSource`<sup>Optional</sup> <a name="RepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.repoSource"></a>

```csharp
public CloudbuildTriggerBuildSourceRepoSource RepoSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repo_source CloudbuildTrigger#repo_source}

---

##### `StorageSource`<sup>Optional</sup> <a name="StorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource.property.storageSource"></a>

```csharp
public CloudbuildTriggerBuildSourceStorageSource StorageSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#storage_source CloudbuildTrigger#storage_source}

---

### CloudbuildTriggerBuildSourceRepoSource <a name="CloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSourceRepoSource {
    string RepoName,
    string BranchName = null,
    string CommitSha = null,
    string Dir = null,
    object InvertRegex = null,
    string ProjectId = null,
    System.Collections.Generic.IDictionary<string, string> Substitutions = null,
    string TagName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName">RepoName</a></code> | <code>string</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName">BranchName</a></code> | <code>string</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha">CommitSha</a></code> | <code>string</code> | Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir">Dir</a></code> | <code>string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex">InvertRegex</a></code> | <code>object</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId">ProjectId</a></code> | <code>string</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions">Substitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Substitutions to use in a triggered build. Should only be used with triggers.run. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName">TagName</a></code> | <code>string</code> | Regex matching tags to build. |

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.repoName"></a>

```csharp
public string RepoName { get; set; }
```

- *Type:* string

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.branchName"></a>

```csharp
public string BranchName { get; set; }
```

- *Type:* string

Regex matching branches to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.commitSha"></a>

```csharp
public string CommitSha { get; set; }
```

- *Type:* string

Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.dir"></a>

```csharp
public string Dir { get; set; }
```

- *Type:* string

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and is an absolute path,
this value is ignored for that step's execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.substitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Substitutions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Substitutions to use in a triggered build. Should only be used with triggers.run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource.property.tagName"></a>

```csharp
public string TagName { get; set; }
```

- *Type:* string

Regex matching tags to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and
described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerBuildSourceStorageSource <a name="CloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSourceStorageSource {
    string Bucket,
    string Object,
    string Generation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket">Bucket</a></code> | <code>string</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object">Object</a></code> | <code>string</code> | Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation">Generation</a></code> | <code>string</code> | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#bucket CloudbuildTrigger#bucket}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Google Cloud Storage object containing the source. This object must be a gzipped archive file (.tar.gz) containing source to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#object CloudbuildTrigger#object}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource.property.generation"></a>

```csharp
public string Generation { get; set; }
```

- *Type:* string

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#generation CloudbuildTrigger#generation}

---

### CloudbuildTriggerBuildStep <a name="CloudbuildTriggerBuildStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildStep {
    string Name,
    double[] AllowExitCodes = null,
    object AllowFailure = null,
    string[] Args = null,
    string Dir = null,
    string Entrypoint = null,
    string[] Env = null,
    string Id = null,
    string Script = null,
    string[] SecretEnv = null,
    string Timeout = null,
    string Timing = null,
    object Volumes = null,
    string[] WaitFor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name">Name</a></code> | <code>string</code> | The name of the container image that will run this particular build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowExitCodes">AllowExitCodes</a></code> | <code>double[]</code> | Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowFailure">AllowFailure</a></code> | <code>object</code> | Allow this build step to fail without failing the entire build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args">Args</a></code> | <code>string[]</code> | A list of arguments that will be presented to the step when it is started. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir">Dir</a></code> | <code>string</code> | Working directory to use when running this step's container. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint">Entrypoint</a></code> | <code>string</code> | Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env">Env</a></code> | <code>string[]</code> | A list of environment variable definitions to be used when running a step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id">Id</a></code> | <code>string</code> | Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script">Script</a></code> | <code>string</code> | A shell script to be executed in the step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv">SecretEnv</a></code> | <code>string[]</code> | A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout">Timeout</a></code> | <code>string</code> | Time limit for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing">Timing</a></code> | <code>string</code> | Output only. Stores timing information for executing this build step. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes">Volumes</a></code> | <code>object</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor">WaitFor</a></code> | <code>string[]</code> | The ID(s) of the step(s) that this build step depends on. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
for images and examples).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `AllowExitCodes`<sup>Optional</sup> <a name="AllowExitCodes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowExitCodes"></a>

```csharp
public double[] AllowExitCodes { get; set; }
```

- *Type:* double[]

Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes.

If 'allowFailure' is also specified, this field will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#allow_exit_codes CloudbuildTrigger#allow_exit_codes}

---

##### `AllowFailure`<sup>Optional</sup> <a name="AllowFailure" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.allowFailure"></a>

```csharp
public object AllowFailure { get; set; }
```

- *Type:* object

Allow this build step to fail without failing the entire build.

If false, the entire build will fail if this step fails. Otherwise, the
build will succeed, but this step will still have a failure status.
Error information will be reported in the 'failureDetail' field.

'allowExitCodes' takes precedence over this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#allow_failure CloudbuildTrigger#allow_failure}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#args CloudbuildTrigger#args}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.dir"></a>

```csharp
public string Dir { get; set; }
```

- *Type:* string

Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.entrypoint"></a>

```csharp
public string Entrypoint { get; set; }
```

- *Type:* string

Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#entrypoint CloudbuildTrigger#entrypoint}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.env"></a>

```csharp
public string[] Env { get; set; }
```

- *Type:* string[]

A list of environment variable definitions to be used when running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#env CloudbuildTrigger#env}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Unique identifier for this build step, used in 'wait_for' to reference this build step as a dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

A shell script to be executed in the step.

When script is provided, the user cannot specify the entrypoint or args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#script CloudbuildTrigger#script}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.secretEnv"></a>

```csharp
public string[] SecretEnv { get; set; }
```

- *Type:* string[]

A list of environment variables which are encrypted using a Cloud Key Management Service crypto key.

These values must be specified in
the build's 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#secret_env CloudbuildTrigger#secret_env}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Time limit for executing this build step.

If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#timeout CloudbuildTrigger#timeout}

---

##### `Timing`<sup>Optional</sup> <a name="Timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.timing"></a>

```csharp
public string Timing { get; set; }
```

- *Type:* string

Output only. Stores timing information for executing this build step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#timing CloudbuildTrigger#timing}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.volumes"></a>

```csharp
public object Volumes { get; set; }
```

- *Type:* object

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#volumes CloudbuildTrigger#volumes}

---

##### `WaitFor`<sup>Optional</sup> <a name="WaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStep.property.waitFor"></a>

```csharp
public string[] WaitFor { get; set; }
```

- *Type:* string[]

The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#wait_for CloudbuildTrigger#wait_for}

---

### CloudbuildTriggerBuildStepVolumes <a name="CloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildStepVolumes {
    string Name,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name">Name</a></code> | <code>string</code> | Name of the volume to mount. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path">Path</a></code> | <code>string</code> | Path at which to mount the volume. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumes.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

### CloudbuildTriggerConfig <a name="CloudbuildTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CloudbuildTriggerApprovalConfig ApprovalConfig = null,
    CloudbuildTriggerBitbucketServerTriggerConfig BitbucketServerTriggerConfig = null,
    CloudbuildTriggerBuild BuildAttribute = null,
    string Description = null,
    object Disabled = null,
    string Filename = null,
    string Filter = null,
    CloudbuildTriggerGitFileSource GitFileSource = null,
    CloudbuildTriggerGithub Github = null,
    string Id = null,
    string[] IgnoredFiles = null,
    string IncludeBuildLogs = null,
    string[] IncludedFiles = null,
    string Location = null,
    string Name = null,
    string Project = null,
    CloudbuildTriggerPubsubConfig PubsubConfig = null,
    CloudbuildTriggerRepositoryEventConfig RepositoryEventConfig = null,
    string ServiceAccount = null,
    CloudbuildTriggerSourceToBuild SourceToBuild = null,
    System.Collections.Generic.IDictionary<string, string> Substitutions = null,
    string[] Tags = null,
    CloudbuildTriggerTimeouts Timeouts = null,
    CloudbuildTriggerTriggerTemplate TriggerTemplate = null,
    CloudbuildTriggerWebhookConfig WebhookConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | approval_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | bitbucket_server_trigger_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description">Description</a></code> | <code>string</code> | Human-readable description of the trigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the trigger is disabled or not. If true, the trigger will never result in a build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename">Filename</a></code> | <code>string</code> | Path, from the source root, to a file whose contents is used for the template. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter">Filter</a></code> | <code>string</code> | A Common Expression Language string. Used only with Pub/Sub and Webhook. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | git_file_source block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles">IgnoredFiles</a></code> | <code>string[]</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>string</code> | Build logs will be sent back to GitHub as part of the checkrun result. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles">IncludedFiles</a></code> | <code>string[]</code> | ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location">Location</a></code> | <code>string</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name">Name</a></code> | <code>string</code> | Name of the trigger. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#project CloudbuildTrigger#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | pubsub_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.repositoryEventConfig">RepositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | repository_event_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | source_to_build block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions">Substitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Substitutions data for Build resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags for annotation of a BuildTrigger. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | trigger_template block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | webhook_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApprovalConfig`<sup>Optional</sup> <a name="ApprovalConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.approvalConfig"></a>

```csharp
public CloudbuildTriggerApprovalConfig ApprovalConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#approval_config CloudbuildTrigger#approval_config}

---

##### `BitbucketServerTriggerConfig`<sup>Optional</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.bitbucketServerTriggerConfig"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfig BitbucketServerTriggerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

bitbucket_server_trigger_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#bitbucket_server_trigger_config CloudbuildTrigger#bitbucket_server_trigger_config}

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.buildAttribute"></a>

```csharp
public CloudbuildTriggerBuild BuildAttribute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#build CloudbuildTrigger#build}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#description CloudbuildTrigger#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the trigger is disabled or not. If true, the trigger will never result in a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#disabled CloudbuildTrigger#disabled}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Path, from the source root, to a file whose contents is used for the template.

Either a filename or build template must be provided. Set this only when using trigger_template or github.
When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#filename CloudbuildTrigger#filename}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A Common Expression Language string. Used only with Pub/Sub and Webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#filter CloudbuildTrigger#filter}

---

##### `GitFileSource`<sup>Optional</sup> <a name="GitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.gitFileSource"></a>

```csharp
public CloudbuildTriggerGitFileSource GitFileSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

git_file_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#git_file_source CloudbuildTrigger#git_file_source}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.github"></a>

```csharp
public CloudbuildTriggerGithub Github { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#github CloudbuildTrigger#github}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#id CloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoredFiles`<sup>Optional</sup> <a name="IgnoredFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.ignoredFiles"></a>

```csharp
public string[] IgnoredFiles { get; set; }
```

- *Type:* string[]

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#ignored_files CloudbuildTrigger#ignored_files}

---

##### `IncludeBuildLogs`<sup>Optional</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includeBuildLogs"></a>

```csharp
public string IncludeBuildLogs { get; set; }
```

- *Type:* string

Build logs will be sent back to GitHub as part of the checkrun result.

Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#include_build_logs CloudbuildTrigger#include_build_logs}

---

##### `IncludedFiles`<sup>Optional</sup> <a name="IncludedFiles" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.includedFiles"></a>

```csharp
public string[] IncludedFiles { get; set; }
```

- *Type:* string[]

ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#included_files CloudbuildTrigger#included_files}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#location CloudbuildTrigger#location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the trigger. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#project CloudbuildTrigger#project}.

---

##### `PubsubConfig`<sup>Optional</sup> <a name="PubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.pubsubConfig"></a>

```csharp
public CloudbuildTriggerPubsubConfig PubsubConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

pubsub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#pubsub_config CloudbuildTrigger#pubsub_config}

---

##### `RepositoryEventConfig`<sup>Optional</sup> <a name="RepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.repositoryEventConfig"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfig RepositoryEventConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

repository_event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository_event_config CloudbuildTrigger#repository_event_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.

If no service account is set, then the standard Cloud Build service account
([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.

Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#service_account CloudbuildTrigger#service_account}

---

##### `SourceToBuild`<sup>Optional</sup> <a name="SourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.sourceToBuild"></a>

```csharp
public CloudbuildTriggerSourceToBuild SourceToBuild { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

source_to_build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#source_to_build CloudbuildTrigger#source_to_build}

---

##### `Substitutions`<sup>Optional</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.substitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Substitutions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Substitutions data for Build resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#substitutions CloudbuildTrigger#substitutions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags for annotation of a BuildTrigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tags CloudbuildTrigger#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.timeouts"></a>

```csharp
public CloudbuildTriggerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts">CloudbuildTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#timeouts CloudbuildTrigger#timeouts}

---

##### `TriggerTemplate`<sup>Optional</sup> <a name="TriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.triggerTemplate"></a>

```csharp
public CloudbuildTriggerTriggerTemplate TriggerTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

trigger_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#trigger_template CloudbuildTrigger#trigger_template}

---

##### `WebhookConfig`<sup>Optional</sup> <a name="WebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerConfig.property.webhookConfig"></a>

```csharp
public CloudbuildTriggerWebhookConfig WebhookConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

webhook_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#webhook_config CloudbuildTrigger#webhook_config}

---

### CloudbuildTriggerGitFileSource <a name="CloudbuildTriggerGitFileSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGitFileSource {
    string Path,
    string RepoType,
    string BitbucketServerConfig = null,
    string GithubEnterpriseConfig = null,
    string Repository = null,
    string Revision = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path">Path</a></code> | <code>string</code> | The path of the file, with the repo root as the root of the path. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType">RepoType</a></code> | <code>string</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>string</code> | The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>string</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repository">Repository</a></code> | <code>string</code> | The fully qualified resource name of the Repo API repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision">Revision</a></code> | <code>string</code> | The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri">Uri</a></code> | <code>string</code> | The URI of the repo (optional). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path of the file, with the repo root as the root of the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#path CloudbuildTrigger#path}

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repoType"></a>

```csharp
public string RepoType { get; set; }
```

- *Type:* string

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `BitbucketServerConfig`<sup>Optional</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.bitbucketServerConfig"></a>

```csharp
public string BitbucketServerConfig { get; set; }
```

- *Type:* string

The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#bitbucket_server_config CloudbuildTrigger#bitbucket_server_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.githubEnterpriseConfig"></a>

```csharp
public string GithubEnterpriseConfig { get; set; }
```

- *Type:* string

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The fully qualified resource name of the Repo API repository.

The fully qualified resource name of the Repo API repository.
If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional).

This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#revision CloudbuildTrigger#revision}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the repo (optional).

If unspecified, the repo from which the trigger
invocation originated is assumed to be the repo from which to read the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

### CloudbuildTriggerGithub <a name="CloudbuildTriggerGithub" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGithub {
    string EnterpriseConfigResourceName = null,
    string Name = null,
    string Owner = null,
    CloudbuildTriggerGithubPullRequest PullRequest = null,
    CloudbuildTriggerGithubPush Push = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>string</code> | The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name">Name</a></code> | <code>string</code> | Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner">Owner</a></code> | <code>string</code> | Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | push block. |

---

##### `EnterpriseConfigResourceName`<sup>Optional</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.enterpriseConfigResourceName"></a>

```csharp
public string EnterpriseConfigResourceName { get; set; }
```

- *Type:* string

The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#enterprise_config_resource_name CloudbuildTrigger#enterprise_config_resource_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#name CloudbuildTrigger#name}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#owner CloudbuildTrigger#owner}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.pullRequest"></a>

```csharp
public CloudbuildTriggerGithubPullRequest PullRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub.property.push"></a>

```csharp
public CloudbuildTriggerGithubPush Push { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#push CloudbuildTrigger#push}

---

### CloudbuildTriggerGithubPullRequest <a name="CloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGithubPullRequest {
    string Branch,
    string CommentControl = null,
    object InvertRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch">Branch</a></code> | <code>string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl">CommentControl</a></code> | <code>string</code> | Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex">InvertRegex</a></code> | <code>object</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Regex of branches to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.commentControl"></a>

```csharp
public string CommentControl { get; set; }
```

- *Type:* string

Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerGithubPush <a name="CloudbuildTriggerGithubPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGithubPush {
    string Branch = null,
    object InvertRegex = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch">Branch</a></code> | <code>string</code> | Regex of branches to match.  Specify only one of branch or tag. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex">InvertRegex</a></code> | <code>object</code> | When true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag">Tag</a></code> | <code>string</code> | Regex of tags to match.  Specify only one of branch or tag. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Regex of branches to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

When true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Regex of tags to match.  Specify only one of branch or tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerPubsubConfig <a name="CloudbuildTriggerPubsubConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerPubsubConfig {
    string Topic,
    string ServiceAccountEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic">Topic</a></code> | <code>string</code> | The name of the topic from which this subscription is receiving messages. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account that will make the push request. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The name of the topic from which this subscription is receiving messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#topic CloudbuildTrigger#topic}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account that will make the push request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#service_account_email CloudbuildTrigger#service_account_email}

---

### CloudbuildTriggerRepositoryEventConfig <a name="CloudbuildTriggerRepositoryEventConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerRepositoryEventConfig {
    CloudbuildTriggerRepositoryEventConfigPullRequest PullRequest = null,
    CloudbuildTriggerRepositoryEventConfigPush Push = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a></code> | push block. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.repository">Repository</a></code> | <code>string</code> | The resource name of the Repo API resource. |

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.pullRequest"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPullRequest PullRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#pull_request CloudbuildTrigger#pull_request}

---

##### `Push`<sup>Optional</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.push"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPush Push { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#push CloudbuildTrigger#push}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The resource name of the Repo API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

### CloudbuildTriggerRepositoryEventConfigPullRequest <a name="CloudbuildTriggerRepositoryEventConfigPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerRepositoryEventConfigPullRequest {
    string Branch = null,
    string CommentControl = null,
    object InvertRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.branch">Branch</a></code> | <code>string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.commentControl">CommentControl</a></code> | <code>string</code> | Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.invertRegex">InvertRegex</a></code> | <code>object</code> | If true, branches that do NOT match the git_ref will trigger a build. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `CommentControl`<sup>Optional</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.commentControl"></a>

```csharp
public string CommentControl { get; set; }
```

- *Type:* string

Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#comment_control CloudbuildTrigger#comment_control}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

If true, branches that do NOT match the git_ref will trigger a build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

### CloudbuildTriggerRepositoryEventConfigPush <a name="CloudbuildTriggerRepositoryEventConfigPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerRepositoryEventConfigPush {
    string Branch = null,
    object InvertRegex = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.branch">Branch</a></code> | <code>string</code> | Regex of branches to match. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.invertRegex">InvertRegex</a></code> | <code>object</code> | If true, only trigger a build if the revision regex does NOT match the git_ref regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.tag">Tag</a></code> | <code>string</code> | Regex of tags to match. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch CloudbuildTrigger#branch}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

If true, only trigger a build if the revision regex does NOT match the git_ref regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Regex of tags to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tag CloudbuildTrigger#tag}

---

### CloudbuildTriggerSourceToBuild <a name="CloudbuildTriggerSourceToBuild" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerSourceToBuild {
    string Ref,
    string RepoType,
    string BitbucketServerConfig = null,
    string GithubEnterpriseConfig = null,
    string Repository = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref">Ref</a></code> | <code>string</code> | The branch or tag to use. Must start with "refs/" (required). |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType">RepoType</a></code> | <code>string</code> | The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>string</code> | The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>string</code> | The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repository">Repository</a></code> | <code>string</code> | The qualified resource name of the Repo API repository. Either uri or repository can be specified and is required. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri">Uri</a></code> | <code>string</code> | The URI of the repo. |

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

The branch or tag to use. Must start with "refs/" (required).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#ref CloudbuildTrigger#ref}

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repoType"></a>

```csharp
public string RepoType { get; set; }
```

- *Type:* string

The type of the repo, since it may not be explicit from the repo field (e.g from a URL). Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repo_type CloudbuildTrigger#repo_type}

---

##### `BitbucketServerConfig`<sup>Optional</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.bitbucketServerConfig"></a>

```csharp
public string BitbucketServerConfig { get; set; }
```

- *Type:* string

The full resource name of the bitbucket server config. Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#bitbucket_server_config CloudbuildTrigger#bitbucket_server_config}

---

##### `GithubEnterpriseConfig`<sup>Optional</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.githubEnterpriseConfig"></a>

```csharp
public string GithubEnterpriseConfig { get; set; }
```

- *Type:* string

The full resource name of the github enterprise config. Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#github_enterprise_config CloudbuildTrigger#github_enterprise_config}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The qualified resource name of the Repo API repository. Either uri or repository can be specified and is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repository CloudbuildTrigger#repository}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#uri CloudbuildTrigger#uri}

---

### CloudbuildTriggerTimeouts <a name="CloudbuildTriggerTimeouts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#create CloudbuildTrigger#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#delete CloudbuildTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#update CloudbuildTrigger#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#create CloudbuildTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#delete CloudbuildTrigger#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#update CloudbuildTrigger#update}.

---

### CloudbuildTriggerTriggerTemplate <a name="CloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerTriggerTemplate {
    string BranchName = null,
    string CommitSha = null,
    string Dir = null,
    object InvertRegex = null,
    string ProjectId = null,
    string RepoName = null,
    string TagName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName">BranchName</a></code> | <code>string</code> | Name of the branch to build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha">CommitSha</a></code> | <code>string</code> | Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir">Dir</a></code> | <code>string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex">InvertRegex</a></code> | <code>object</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId">ProjectId</a></code> | <code>string</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName">RepoName</a></code> | <code>string</code> | Name of the Cloud Source Repository. If omitted, the name "default" is assumed. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName">TagName</a></code> | <code>string</code> | Name of the tag to build. |

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.branchName"></a>

```csharp
public string BranchName { get; set; }
```

- *Type:* string

Name of the branch to build.

Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#branch_name CloudbuildTrigger#branch_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.commitSha"></a>

```csharp
public string CommitSha { get; set; }
```

- *Type:* string

Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#commit_sha CloudbuildTrigger#commit_sha}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.dir"></a>

```csharp
public string Dir { get; set; }
```

- *Type:* string

Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#dir CloudbuildTrigger#dir}

---

##### `InvertRegex`<sup>Optional</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.invertRegex"></a>

```csharp
public object InvertRegex { get; set; }
```

- *Type:* object

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#invert_regex CloudbuildTrigger#invert_regex}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#project_id CloudbuildTrigger#project_id}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.repoName"></a>

```csharp
public string RepoName { get; set; }
```

- *Type:* string

Name of the Cloud Source Repository. If omitted, the name "default" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#repo_name CloudbuildTrigger#repo_name}

---

##### `TagName`<sup>Optional</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate.property.tagName"></a>

```csharp
public string TagName { get; set; }
```

- *Type:* string

Name of the tag to build.

Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#tag_name CloudbuildTrigger#tag_name}

---

### CloudbuildTriggerWebhookConfig <a name="CloudbuildTriggerWebhookConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerWebhookConfig {
    string Secret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret">Secret</a></code> | <code>string</code> | Resource name for the secret required as a URL parameter. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Resource name for the secret required as a URL parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/cloudbuild_trigger#secret CloudbuildTrigger#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildTriggerApprovalConfigOutputReference <a name="CloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerApprovalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired">ResetApprovalRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovalRequired` <a name="ResetApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.resetApprovalRequired"></a>

```csharp
private void ResetApprovalRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput">ApprovalRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalRequiredInput`<sup>Optional</sup> <a name="ApprovalRequiredInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequiredInput"></a>

```csharp
public object ApprovalRequiredInput { get; }
```

- *Type:* object

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerApprovalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerApprovalConfig">CloudbuildTriggerApprovalConfig</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBitbucketServerTriggerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush">ResetPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest"></a>

```csharp
private void PutPullRequest(CloudbuildTriggerBitbucketServerTriggerConfigPullRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush"></a>

```csharp
private void PutPush(CloudbuildTriggerBitbucketServerTriggerConfigPush Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPullRequest"></a>

```csharp
private void ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resetPush"></a>

```csharp
private void ResetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput">BitbucketServerConfigResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput">RepoSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">RepoSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference Push { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference">CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference</a>

---

##### `BitbucketServerConfigResourceInput`<sup>Optional</sup> <a name="BitbucketServerConfigResourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResourceInput"></a>

```csharp
public string BitbucketServerConfigResourceInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequestInput"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequest PullRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pushInput"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPush PushInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---

##### `RepoSlugInput`<sup>Optional</sup> <a name="RepoSlugInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlugInput"></a>

```csharp
public string RepoSlugInput { get; }
```

- *Type:* string

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```csharp
public string BitbucketServerConfigResource { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```csharp
public string RepoSlug { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfig">CloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetCommentControl"></a>

```csharp
private void ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControlInput"></a>

```csharp
public string CommentControlInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```csharp
public string CommentControl { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPullRequest">CloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBitbucketServerTriggerConfigPush InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBitbucketServerTriggerConfigPush">CloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### CloudbuildTriggerBuildArtifactsMavenArtifactsList <a name="CloudbuildTriggerBuildArtifactsMavenArtifactsList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsMavenArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.get"></a>

```csharp
private CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference <a name="CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetArtifactId">ResetArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactId` <a name="ResetArtifactId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetArtifactId"></a>

```csharp
private void ResetArtifactId()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactIdInput"></a>

```csharp
public string ArtifactIdInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildArtifactsNpmPackagesList <a name="CloudbuildTriggerBuildArtifactsNpmPackagesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsNpmPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.get"></a>

```csharp
private CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference <a name="CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetPackagePath">ResetPackagePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPackagePath` <a name="ResetPackagePath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetPackagePath"></a>

```csharp
private void ResetPackagePath()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePathInput">PackagePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath">PackagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackagePathInput`<sup>Optional</sup> <a name="PackagePathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePathInput"></a>

```csharp
public string PackagePathInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath"></a>

```csharp
public string PackagePath { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">Timing</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```csharp
public CloudbuildTriggerBuildArtifactsObjectsTimingList Timing { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList">CloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildArtifactsObjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---


### CloudbuildTriggerBuildArtifactsObjectsTimingList <a name="CloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsObjectsTimingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```csharp
private CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildArtifactsObjectsTiming InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsTiming">CloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### CloudbuildTriggerBuildArtifactsOutputReference <a name="CloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts">PutMavenArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages">PutNpmPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects">PutObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages">PutPythonPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetMavenArtifacts">ResetMavenArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetNpmPackages">ResetNpmPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects">ResetObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetPythonPackages">ResetPythonPackages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMavenArtifacts` <a name="PutMavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts"></a>

```csharp
private void PutMavenArtifacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putMavenArtifacts.parameter.value"></a>

- *Type:* object

---

##### `PutNpmPackages` <a name="PutNpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages"></a>

```csharp
private void PutNpmPackages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putNpmPackages.parameter.value"></a>

- *Type:* object

---

##### `PutObjects` <a name="PutObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects"></a>

```csharp
private void PutObjects(CloudbuildTriggerBuildArtifactsObjects Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putObjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `PutPythonPackages` <a name="PutPythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages"></a>

```csharp
private void PutPythonPackages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.putPythonPackages.parameter.value"></a>

- *Type:* object

---

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetImages"></a>

```csharp
private void ResetImages()
```

##### `ResetMavenArtifacts` <a name="ResetMavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetMavenArtifacts"></a>

```csharp
private void ResetMavenArtifacts()
```

##### `ResetNpmPackages` <a name="ResetNpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetNpmPackages"></a>

```csharp
private void ResetNpmPackages()
```

##### `ResetObjects` <a name="ResetObjects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetObjects"></a>

```csharp
private void ResetObjects()
```

##### `ResetPythonPackages` <a name="ResetPythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.resetPythonPackages"></a>

```csharp
private void ResetPythonPackages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts">MavenArtifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList">CloudbuildTriggerBuildArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages">NpmPackages</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList">CloudbuildTriggerBuildArtifactsNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages">PythonPackages</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList">CloudbuildTriggerBuildArtifactsPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput">ImagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifactsInput">MavenArtifactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackagesInput">NpmPackagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput">ObjectsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackagesInput">PythonPackagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images">Images</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MavenArtifacts`<sup>Required</sup> <a name="MavenArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts"></a>

```csharp
public CloudbuildTriggerBuildArtifactsMavenArtifactsList MavenArtifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsMavenArtifactsList">CloudbuildTriggerBuildArtifactsMavenArtifactsList</a>

---

##### `NpmPackages`<sup>Required</sup> <a name="NpmPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages"></a>

```csharp
public CloudbuildTriggerBuildArtifactsNpmPackagesList NpmPackages { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsNpmPackagesList">CloudbuildTriggerBuildArtifactsNpmPackagesList</a>

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```csharp
public CloudbuildTriggerBuildArtifactsObjectsOutputReference Objects { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjectsOutputReference">CloudbuildTriggerBuildArtifactsObjectsOutputReference</a>

---

##### `PythonPackages`<sup>Required</sup> <a name="PythonPackages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages"></a>

```csharp
public CloudbuildTriggerBuildArtifactsPythonPackagesList PythonPackages { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList">CloudbuildTriggerBuildArtifactsPythonPackagesList</a>

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.imagesInput"></a>

```csharp
public string[] ImagesInput { get; }
```

- *Type:* string[]

---

##### `MavenArtifactsInput`<sup>Optional</sup> <a name="MavenArtifactsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifactsInput"></a>

```csharp
public object MavenArtifactsInput { get; }
```

- *Type:* object

---

##### `NpmPackagesInput`<sup>Optional</sup> <a name="NpmPackagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.npmPackagesInput"></a>

```csharp
public object NpmPackagesInput { get; }
```

- *Type:* object

---

##### `ObjectsInput`<sup>Optional</sup> <a name="ObjectsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.objectsInput"></a>

```csharp
public CloudbuildTriggerBuildArtifactsObjects ObjectsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsObjects">CloudbuildTriggerBuildArtifactsObjects</a>

---

##### `PythonPackagesInput`<sup>Optional</sup> <a name="PythonPackagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackagesInput"></a>

```csharp
public object PythonPackagesInput { get; }
```

- *Type:* object

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```csharp
public string[] Images { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---


### CloudbuildTriggerBuildArtifactsPythonPackagesList <a name="CloudbuildTriggerBuildArtifactsPythonPackagesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsPythonPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.get"></a>

```csharp
private CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference <a name="CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildAvailableSecretsOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildAvailableSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager">PutSecretManager</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretManager` <a name="PutSecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager"></a>

```csharp
private void PutSecretManager(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.putSecretManager.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">SecretManager</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput">SecretManagerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```csharp
public CloudbuildTriggerBuildAvailableSecretsSecretManagerList SecretManager { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList">CloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `SecretManagerInput`<sup>Optional</sup> <a name="SecretManagerInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManagerInput"></a>

```csharp
public object SecretManagerInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildAvailableSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildAvailableSecretsSecretManagerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```csharp
private CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput">EnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">Env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.envInput"></a>

```csharp
public string EnvInput { get; }
```

- *Type:* string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```csharp
public string Env { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildOptionsOutputReference <a name="CloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions">ResetDynamicSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption">ResetLogStreamingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption">ResetRequestedVerifyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash">ResetSourceProvenanceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption">ResetSubstitutionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.putVolumes.parameter.value"></a>

- *Type:* object

---

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDynamicSubstitutions` <a name="ResetDynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetDynamicSubstitutions"></a>

```csharp
private void ResetDynamicSubstitutions()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetLogStreamingOption` <a name="ResetLogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetLogStreamingOption"></a>

```csharp
private void ResetLogStreamingOption()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetRequestedVerifyOption` <a name="ResetRequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetRequestedVerifyOption"></a>

```csharp
private void ResetRequestedVerifyOption()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSecretEnv"></a>

```csharp
private void ResetSecretEnv()
```

##### `ResetSourceProvenanceHash` <a name="ResetSourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSourceProvenanceHash"></a>

```csharp
private void ResetSourceProvenanceHash()
```

##### `ResetSubstitutionOption` <a name="ResetSubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetSubstitutionOption"></a>

```csharp
private void ResetSubstitutionOption()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.resetWorkerPool"></a>

```csharp
private void ResetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput">DynamicSubstitutionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput">EnvInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput">LoggingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput">LogStreamingOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput">RequestedVerifyOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput">SourceProvenanceHashInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput">SubstitutionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput">VolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput">WorkerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env">Env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging">Logging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">LogStreamingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">SecretEnv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">SubstitutionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```csharp
public CloudbuildTriggerBuildOptionsVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList">CloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DynamicSubstitutionsInput`<sup>Optional</sup> <a name="DynamicSubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutionsInput"></a>

```csharp
public object DynamicSubstitutionsInput { get; }
```

- *Type:* object

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.envInput"></a>

```csharp
public string[] EnvInput { get; }
```

- *Type:* string[]

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.loggingInput"></a>

```csharp
public string LoggingInput { get; }
```

- *Type:* string

---

##### `LogStreamingOptionInput`<sup>Optional</sup> <a name="LogStreamingOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOptionInput"></a>

```csharp
public string LogStreamingOptionInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `RequestedVerifyOptionInput`<sup>Optional</sup> <a name="RequestedVerifyOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOptionInput"></a>

```csharp
public string RequestedVerifyOptionInput { get; }
```

- *Type:* string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnvInput"></a>

```csharp
public string[] SecretEnvInput { get; }
```

- *Type:* string[]

---

##### `SourceProvenanceHashInput`<sup>Optional</sup> <a name="SourceProvenanceHashInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHashInput"></a>

```csharp
public string[] SourceProvenanceHashInput { get; }
```

- *Type:* string[]

---

##### `SubstitutionOptionInput`<sup>Optional</sup> <a name="SubstitutionOptionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOptionInput"></a>

```csharp
public string SubstitutionOptionInput { get; }
```

- *Type:* string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.volumesInput"></a>

```csharp
public object VolumesInput { get; }
```

- *Type:* object

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPoolInput"></a>

```csharp
public string WorkerPoolInput { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `DynamicSubstitutions`<sup>Required</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```csharp
public object DynamicSubstitutions { get; }
```

- *Type:* object

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```csharp
public string[] Env { get; }
```

- *Type:* string[]

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```csharp
public string Logging { get; }
```

- *Type:* string

---

##### `LogStreamingOption`<sup>Required</sup> <a name="LogStreamingOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```csharp
public string LogStreamingOption { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `RequestedVerifyOption`<sup>Required</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```csharp
public string RequestedVerifyOption { get; }
```

- *Type:* string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```csharp
public string[] SecretEnv { get; }
```

- *Type:* string[]

---

##### `SourceProvenanceHash`<sup>Required</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```csharp
public string[] SourceProvenanceHash { get; }
```

- *Type:* string[]

---

##### `SubstitutionOption`<sup>Required</sup> <a name="SubstitutionOption" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```csharp
public string SubstitutionOption { get; }
```

- *Type:* string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---


### CloudbuildTriggerBuildOptionsVolumesList <a name="CloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildOptionsVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get"></a>

```csharp
private CloudbuildTriggerBuildOptionsVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildOptionsVolumesOutputReference <a name="CloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildOptionsVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildOutputReference <a name="CloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets">PutAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts">ResetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets">ResetAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket">ResetLogsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl">ResetQueueTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts"></a>

```csharp
private void PutArtifacts(CloudbuildTriggerBuildArtifacts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `PutAvailableSecrets` <a name="PutAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets"></a>

```csharp
private void PutAvailableSecrets(CloudbuildTriggerBuildAvailableSecrets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putAvailableSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions"></a>

```csharp
private void PutOptions(CloudbuildTriggerBuildOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource"></a>

```csharp
private void PutSource(CloudbuildTriggerBuildSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `PutStep` <a name="PutStep" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep"></a>

```csharp
private void PutStep(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.putStep.parameter.value"></a>

- *Type:* object

---

##### `ResetArtifacts` <a name="ResetArtifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetArtifacts"></a>

```csharp
private void ResetArtifacts()
```

##### `ResetAvailableSecrets` <a name="ResetAvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetAvailableSecrets"></a>

```csharp
private void ResetAvailableSecrets()
```

##### `ResetImages` <a name="ResetImages" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetImages"></a>

```csharp
private void ResetImages()
```

##### `ResetLogsBucket` <a name="ResetLogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetLogsBucket"></a>

```csharp
private void ResetLogsBucket()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetQueueTtl` <a name="ResetQueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetQueueTtl"></a>

```csharp
private void ResetQueueTtl()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetSubstitutions"></a>

```csharp
private void ResetSubstitutions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step">Step</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput">ArtifactsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput">AvailableSecretsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput">ImagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput">LogsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput">QueueTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput">StepInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput">SubstitutionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images">Images</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket">LogsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl">QueueTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions">Substitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```csharp
public CloudbuildTriggerBuildArtifactsOutputReference Artifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifactsOutputReference">CloudbuildTriggerBuildArtifactsOutputReference</a>

---

##### `AvailableSecrets`<sup>Required</sup> <a name="AvailableSecrets" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```csharp
public CloudbuildTriggerBuildAvailableSecretsOutputReference AvailableSecrets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecretsOutputReference">CloudbuildTriggerBuildAvailableSecretsOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.options"></a>

```csharp
public CloudbuildTriggerBuildOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptionsOutputReference">CloudbuildTriggerBuildOptionsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secret"></a>

```csharp
public CloudbuildTriggerBuildSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList">CloudbuildTriggerBuildSecretList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.source"></a>

```csharp
public CloudbuildTriggerBuildSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference">CloudbuildTriggerBuildSourceOutputReference</a>

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.step"></a>

```csharp
public CloudbuildTriggerBuildStepList Step { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList">CloudbuildTriggerBuildStepList</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.artifactsInput"></a>

```csharp
public CloudbuildTriggerBuildArtifacts ArtifactsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildArtifacts">CloudbuildTriggerBuildArtifacts</a>

---

##### `AvailableSecretsInput`<sup>Optional</sup> <a name="AvailableSecretsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.availableSecretsInput"></a>

```csharp
public CloudbuildTriggerBuildAvailableSecrets AvailableSecretsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildAvailableSecrets">CloudbuildTriggerBuildAvailableSecrets</a>

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.imagesInput"></a>

```csharp
public string[] ImagesInput { get; }
```

- *Type:* string[]

---

##### `LogsBucketInput`<sup>Optional</sup> <a name="LogsBucketInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucketInput"></a>

```csharp
public string LogsBucketInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.optionsInput"></a>

```csharp
public CloudbuildTriggerBuildOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOptions">CloudbuildTriggerBuildOptions</a>

---

##### `QueueTtlInput`<sup>Optional</sup> <a name="QueueTtlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtlInput"></a>

```csharp
public string QueueTtlInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.sourceInput"></a>

```csharp
public CloudbuildTriggerBuildSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.stepInput"></a>

```csharp
public object StepInput { get; }
```

- *Type:* object

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SubstitutionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.images"></a>

```csharp
public string[] Images { get; }
```

- *Type:* string[]

---

##### `LogsBucket`<sup>Required</sup> <a name="LogsBucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```csharp
public string LogsBucket { get; }
```

- *Type:* string

---

##### `QueueTtl`<sup>Required</sup> <a name="QueueTtl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```csharp
public string QueueTtl { get; }
```

- *Type:* string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Substitutions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuild InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuild">CloudbuildTriggerBuild</a>

---


### CloudbuildTriggerBuildSecretList <a name="CloudbuildTriggerBuildSecretList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get"></a>

```csharp
private CloudbuildTriggerBuildSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildSecretOutputReference <a name="CloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.resetSecretEnv"></a>

```csharp
private void ResetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv">SecretEnv</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnvInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretEnvInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretEnv { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildSourceOutputReference <a name="CloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource">PutRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource">PutStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource">ResetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource">ResetStorageSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepoSource` <a name="PutRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource"></a>

```csharp
private void PutRepoSource(CloudbuildTriggerBuildSourceRepoSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `PutStorageSource` <a name="PutStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource"></a>

```csharp
private void PutStorageSource(CloudbuildTriggerBuildSourceStorageSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `ResetRepoSource` <a name="ResetRepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetRepoSource"></a>

```csharp
private void ResetRepoSource()
```

##### `ResetStorageSource` <a name="ResetStorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.resetStorageSource"></a>

```csharp
private void ResetStorageSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput">RepoSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput">StorageSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```csharp
public CloudbuildTriggerBuildSourceRepoSourceOutputReference RepoSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference">CloudbuildTriggerBuildSourceRepoSourceOutputReference</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```csharp
public CloudbuildTriggerBuildSourceStorageSourceOutputReference StorageSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference">CloudbuildTriggerBuildSourceStorageSourceOutputReference</a>

---

##### `RepoSourceInput`<sup>Optional</sup> <a name="RepoSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.repoSourceInput"></a>

```csharp
public CloudbuildTriggerBuildSourceRepoSource RepoSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---

##### `StorageSourceInput`<sup>Optional</sup> <a name="StorageSourceInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.storageSourceInput"></a>

```csharp
public CloudbuildTriggerBuildSourceStorageSource StorageSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSource">CloudbuildTriggerBuildSource</a>

---


### CloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="CloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSourceRepoSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions">ResetSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetBranchName"></a>

```csharp
private void ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetCommitSha"></a>

```csharp
private void ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetDir"></a>

```csharp
private void ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetSubstitutions` <a name="ResetSubstitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetSubstitutions"></a>

```csharp
private void ResetSubstitutions()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.resetTagName"></a>

```csharp
private void ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput">DirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput">SubstitutionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">Substitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchNameInput"></a>

```csharp
public string BranchNameInput { get; }
```

- *Type:* string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitShaInput"></a>

```csharp
public string CommitShaInput { get; }
```

- *Type:* string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dirInput"></a>

```csharp
public string DirInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoNameInput"></a>

```csharp
public string RepoNameInput { get; }
```

- *Type:* string

---

##### `SubstitutionsInput`<sup>Optional</sup> <a name="SubstitutionsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SubstitutionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagNameInput"></a>

```csharp
public string TagNameInput { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```csharp
public string CommitSha { get; }
```

- *Type:* string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Substitutions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildSourceRepoSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceRepoSource">CloudbuildTriggerBuildSourceRepoSource</a>

---


### CloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="CloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildSourceStorageSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.resetGeneration"></a>

```csharp
private void ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generationInput"></a>

```csharp
public string GenerationInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerBuildSourceStorageSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildSourceStorageSource">CloudbuildTriggerBuildSourceStorageSource</a>

---


### CloudbuildTriggerBuildStepList <a name="CloudbuildTriggerBuildStepList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildStepList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get"></a>

```csharp
private CloudbuildTriggerBuildStepOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildStepOutputReference <a name="CloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowExitCodes">ResetAllowExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowFailure">ResetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming">ResetTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor">ResetWaitFor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.putVolumes.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowExitCodes` <a name="ResetAllowExitCodes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowExitCodes"></a>

```csharp
private void ResetAllowExitCodes()
```

##### `ResetAllowFailure` <a name="ResetAllowFailure" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetAllowFailure"></a>

```csharp
private void ResetAllowFailure()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetDir"></a>

```csharp
private void ResetDir()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetSecretEnv"></a>

```csharp
private void ResetSecretEnv()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTiming` <a name="ResetTiming" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetTiming"></a>

```csharp
private void ResetTiming()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

##### `ResetWaitFor` <a name="ResetWaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.resetWaitFor"></a>

```csharp
private void ResetWaitFor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodesInput">AllowExitCodesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailureInput">AllowFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput">DirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput">EnvInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput">TimingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput">VolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput">WaitForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodes">AllowExitCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env">Env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv">SecretEnv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing">Timing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor">WaitFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```csharp
public CloudbuildTriggerBuildStepVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList">CloudbuildTriggerBuildStepVolumesList</a>

---

##### `AllowExitCodesInput`<sup>Optional</sup> <a name="AllowExitCodesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodesInput"></a>

```csharp
public double[] AllowExitCodesInput { get; }
```

- *Type:* double[]

---

##### `AllowFailureInput`<sup>Optional</sup> <a name="AllowFailureInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailureInput"></a>

```csharp
public object AllowFailureInput { get; }
```

- *Type:* object

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dirInput"></a>

```csharp
public string DirInput { get; }
```

- *Type:* string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypointInput"></a>

```csharp
public string EntrypointInput { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.envInput"></a>

```csharp
public string[] EnvInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnvInput"></a>

```csharp
public string[] SecretEnvInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `TimingInput`<sup>Optional</sup> <a name="TimingInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timingInput"></a>

```csharp
public string TimingInput { get; }
```

- *Type:* string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.volumesInput"></a>

```csharp
public object VolumesInput { get; }
```

- *Type:* object

---

##### `WaitForInput`<sup>Optional</sup> <a name="WaitForInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitForInput"></a>

```csharp
public string[] WaitForInput { get; }
```

- *Type:* string[]

---

##### `AllowExitCodes`<sup>Required</sup> <a name="AllowExitCodes" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowExitCodes"></a>

```csharp
public double[] AllowExitCodes { get; }
```

- *Type:* double[]

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.allowFailure"></a>

```csharp
public object AllowFailure { get; }
```

- *Type:* object

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```csharp
public string Entrypoint { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.env"></a>

```csharp
public string[] Env { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```csharp
public string[] SecretEnv { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```csharp
public string Timing { get; }
```

- *Type:* string

---

##### `WaitFor`<sup>Required</sup> <a name="WaitFor" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```csharp
public string[] WaitFor { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildStepVolumesList <a name="CloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildStepVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get"></a>

```csharp
private CloudbuildTriggerBuildStepVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerBuildStepVolumesOutputReference <a name="CloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerBuildStepVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerGitFileSourceOutputReference <a name="CloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGitFileSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetBitbucketServerConfig">ResetBitbucketServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBitbucketServerConfig` <a name="ResetBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetBitbucketServerConfig"></a>

```csharp
private void ResetBitbucketServerConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetGithubEnterpriseConfig"></a>

```csharp
private void ResetGithubEnterpriseConfig()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfigInput">BitbucketServerConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput">RepoTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType">RepoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketServerConfigInput`<sup>Optional</sup> <a name="BitbucketServerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfigInput"></a>

```csharp
public string BitbucketServerConfigInput { get; }
```

- *Type:* string

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfigInput"></a>

```csharp
public string GithubEnterpriseConfigInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RepoTypeInput`<sup>Optional</sup> <a name="RepoTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoTypeInput"></a>

```csharp
public string RepoTypeInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `BitbucketServerConfig`<sup>Required</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig"></a>

```csharp
public string BitbucketServerConfig { get; }
```

- *Type:* string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```csharp
public string GithubEnterpriseConfig { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```csharp
public string RepoType { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerGitFileSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGitFileSource">CloudbuildTriggerGitFileSource</a>

---


### CloudbuildTriggerGithubOutputReference <a name="CloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName">ResetEnterpriseConfigResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush">ResetPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest"></a>

```csharp
private void PutPullRequest(CloudbuildTriggerGithubPullRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush"></a>

```csharp
private void PutPush(CloudbuildTriggerGithubPush Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `ResetEnterpriseConfigResourceName` <a name="ResetEnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetEnterpriseConfigResourceName"></a>

```csharp
private void ResetEnterpriseConfigResourceName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPullRequest"></a>

```csharp
private void ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.resetPush"></a>

```csharp
private void ResetPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput">EnterpriseConfigResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```csharp
public CloudbuildTriggerGithubPullRequestOutputReference PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference">CloudbuildTriggerGithubPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.push"></a>

```csharp
public CloudbuildTriggerGithubPushOutputReference Push { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference">CloudbuildTriggerGithubPushOutputReference</a>

---

##### `EnterpriseConfigResourceNameInput`<sup>Optional</sup> <a name="EnterpriseConfigResourceNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceNameInput"></a>

```csharp
public string EnterpriseConfigResourceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pullRequestInput"></a>

```csharp
public CloudbuildTriggerGithubPullRequest PullRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.pushInput"></a>

```csharp
public CloudbuildTriggerGithubPush PushInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---

##### `EnterpriseConfigResourceName`<sup>Required</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```csharp
public string EnterpriseConfigResourceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithub">CloudbuildTriggerGithub</a>

---


### CloudbuildTriggerGithubPullRequestOutputReference <a name="CloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGithubPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetCommentControl"></a>

```csharp
private void ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControlInput"></a>

```csharp
public string CommentControlInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```csharp
public string CommentControl { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerGithubPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPullRequest">CloudbuildTriggerGithubPullRequest</a>

---


### CloudbuildTriggerGithubPushOutputReference <a name="CloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerGithubPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerGithubPush InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerGithubPush">CloudbuildTriggerGithubPush</a>

---


### CloudbuildTriggerPubsubConfigOutputReference <a name="CloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerPubsubConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription">Subscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```csharp
public string Subscription { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerPubsubConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerPubsubConfig">CloudbuildTriggerPubsubConfig</a>

---


### CloudbuildTriggerRepositoryEventConfigOutputReference <a name="CloudbuildTriggerRepositoryEventConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerRepositoryEventConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPush">PutPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPush">ResetPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest"></a>

```csharp
private void PutPullRequest(CloudbuildTriggerRepositoryEventConfigPullRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

---

##### `PutPush` <a name="PutPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPush"></a>

```csharp
private void PutPush(CloudbuildTriggerRepositoryEventConfigPush Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.putPush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

---

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPullRequest"></a>

```csharp
private void ResetPullRequest()
```

##### `ResetPush` <a name="ResetPush" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetPush"></a>

```csharp
private void ResetPush()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference">CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference">CloudbuildTriggerRepositoryEventConfigPushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pushInput">PushInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference">CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.push"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPushOutputReference Push { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference">CloudbuildTriggerRepositoryEventConfigPushOutputReference</a>

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequestInput"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPullRequest PullRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

---

##### `PushInput`<sup>Optional</sup> <a name="PushInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.pushInput"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPush PushInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfig">CloudbuildTriggerRepositoryEventConfig</a>

---


### CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference <a name="CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetCommentControl">ResetCommentControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCommentControl` <a name="ResetCommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetCommentControl"></a>

```csharp
private void ResetCommentControl()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControlInput">CommentControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommentControlInput`<sup>Optional</sup> <a name="CommentControlInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControlInput"></a>

```csharp
public string CommentControlInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl"></a>

```csharp
public string CommentControl { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPullRequest">CloudbuildTriggerRepositoryEventConfigPullRequest</a>

---


### CloudbuildTriggerRepositoryEventConfigPushOutputReference <a name="CloudbuildTriggerRepositoryEventConfigPushOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerRepositoryEventConfigPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerRepositoryEventConfigPush InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerRepositoryEventConfigPush">CloudbuildTriggerRepositoryEventConfigPush</a>

---


### CloudbuildTriggerSourceToBuildOutputReference <a name="CloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerSourceToBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetBitbucketServerConfig">ResetBitbucketServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig">ResetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBitbucketServerConfig` <a name="ResetBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetBitbucketServerConfig"></a>

```csharp
private void ResetBitbucketServerConfig()
```

##### `ResetGithubEnterpriseConfig` <a name="ResetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetGithubEnterpriseConfig"></a>

```csharp
private void ResetGithubEnterpriseConfig()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfigInput">BitbucketServerConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput">GithubEnterpriseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput">RepoTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType">RepoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketServerConfigInput`<sup>Optional</sup> <a name="BitbucketServerConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfigInput"></a>

```csharp
public string BitbucketServerConfigInput { get; }
```

- *Type:* string

---

##### `GithubEnterpriseConfigInput`<sup>Optional</sup> <a name="GithubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfigInput"></a>

```csharp
public string GithubEnterpriseConfigInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RepoTypeInput`<sup>Optional</sup> <a name="RepoTypeInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoTypeInput"></a>

```csharp
public string RepoTypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `BitbucketServerConfig`<sup>Required</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig"></a>

```csharp
public string BitbucketServerConfig { get; }
```

- *Type:* string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```csharp
public string GithubEnterpriseConfig { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```csharp
public string RepoType { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerSourceToBuild InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerSourceToBuild">CloudbuildTriggerSourceToBuild</a>

---


### CloudbuildTriggerTimeoutsOutputReference <a name="CloudbuildTriggerTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudbuildTriggerTriggerTemplateOutputReference <a name="CloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerTriggerTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex">ResetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName">ResetTagName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetBranchName"></a>

```csharp
private void ResetBranchName()
```

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetCommitSha"></a>

```csharp
private void ResetCommitSha()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetDir"></a>

```csharp
private void ResetDir()
```

##### `ResetInvertRegex` <a name="ResetInvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetInvertRegex"></a>

```csharp
private void ResetInvertRegex()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetRepoName"></a>

```csharp
private void ResetRepoName()
```

##### `ResetTagName` <a name="ResetTagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.resetTagName"></a>

```csharp
private void ResetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput">DirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput">InvertRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput">TagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">CommitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">InvertRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchNameInput"></a>

```csharp
public string BranchNameInput { get; }
```

- *Type:* string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitShaInput"></a>

```csharp
public string CommitShaInput { get; }
```

- *Type:* string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dirInput"></a>

```csharp
public string DirInput { get; }
```

- *Type:* string

---

##### `InvertRegexInput`<sup>Optional</sup> <a name="InvertRegexInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegexInput"></a>

```csharp
public object InvertRegexInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoNameInput"></a>

```csharp
public string RepoNameInput { get; }
```

- *Type:* string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagNameInput"></a>

```csharp
public string TagNameInput { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```csharp
public string CommitSha { get; }
```

- *Type:* string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```csharp
public object InvertRegex { get; }
```

- *Type:* object

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerTriggerTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerTriggerTemplate">CloudbuildTriggerTriggerTemplate</a>

---


### CloudbuildTriggerWebhookConfigOutputReference <a name="CloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudbuildTriggerWebhookConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```csharp
public CloudbuildTriggerWebhookConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildTrigger.CloudbuildTriggerWebhookConfig">CloudbuildTriggerWebhookConfig</a>

---



