# `dialogflowCxSecuritySettings` Submodule <a name="`dialogflowCxSecuritySettings` Submodule" id="@cdktf/provider-google.dialogflowCxSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxSecuritySettings <a name="DialogflowCxSecuritySettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings google_dialogflow_cx_security_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.NewDialogflowCxSecuritySettings(scope Construct, id *string, config DialogflowCxSecuritySettingsConfig) DialogflowCxSecuritySettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig">DialogflowCxSecuritySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig">DialogflowCxSecuritySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putAudioExportSettings">PutAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putInsightsExportSettings">PutInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetAudioExportSettings">ResetAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInsightsExportSettings">ResetInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetPurgeDataTypes">ResetPurgeDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionScope">ResetRedactionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionStrategy">ResetRedactionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionStrategy">ResetRetentionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionWindowDays">ResetRetentionWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAudioExportSettings` <a name="PutAudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putAudioExportSettings"></a>

```go
func PutAudioExportSettings(value DialogflowCxSecuritySettingsAudioExportSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putAudioExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `PutInsightsExportSettings` <a name="PutInsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putInsightsExportSettings"></a>

```go
func PutInsightsExportSettings(value DialogflowCxSecuritySettingsInsightsExportSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putInsightsExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowCxSecuritySettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts">DialogflowCxSecuritySettingsTimeouts</a>

---

##### `ResetAudioExportSettings` <a name="ResetAudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetAudioExportSettings"></a>

```go
func ResetAudioExportSettings()
```

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetDeidentifyTemplate"></a>

```go
func ResetDeidentifyTemplate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetId"></a>

```go
func ResetId()
```

##### `ResetInsightsExportSettings` <a name="ResetInsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInsightsExportSettings"></a>

```go
func ResetInsightsExportSettings()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInspectTemplate"></a>

```go
func ResetInspectTemplate()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPurgeDataTypes` <a name="ResetPurgeDataTypes" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetPurgeDataTypes"></a>

```go
func ResetPurgeDataTypes()
```

##### `ResetRedactionScope` <a name="ResetRedactionScope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionScope"></a>

```go
func ResetRedactionScope()
```

##### `ResetRedactionStrategy` <a name="ResetRedactionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionStrategy"></a>

```go
func ResetRedactionStrategy()
```

##### `ResetRetentionStrategy` <a name="ResetRetentionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionStrategy"></a>

```go
func ResetRetentionStrategy()
```

##### `ResetRetentionWindowDays` <a name="ResetRetentionWindowDays" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionWindowDays"></a>

```go
func ResetRetentionWindowDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.DialogflowCxSecuritySettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.DialogflowCxSecuritySettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.DialogflowCxSecuritySettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.DialogflowCxSecuritySettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DialogflowCxSecuritySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DialogflowCxSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettings">AudioExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference">DialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettings">InsightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference">DialogflowCxSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettingsInput">AudioExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettingsInput">InsightsExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypesInput">PurgeDataTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScopeInput">RedactionScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategyInput">RedactionStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategyInput">RetentionStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDaysInput">RetentionWindowDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplate">InspectTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypes">PurgeDataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScope">RedactionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategy">RedactionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategy">RetentionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDays">RetentionWindowDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AudioExportSettings`<sup>Required</sup> <a name="AudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettings"></a>

```go
func AudioExportSettings() DialogflowCxSecuritySettingsAudioExportSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference">DialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a>

---

##### `InsightsExportSettings`<sup>Required</sup> <a name="InsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettings"></a>

```go
func InsightsExportSettings() DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeouts"></a>

```go
func Timeouts() DialogflowCxSecuritySettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference">DialogflowCxSecuritySettingsTimeoutsOutputReference</a>

---

##### `AudioExportSettingsInput`<sup>Optional</sup> <a name="AudioExportSettingsInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettingsInput"></a>

```go
func AudioExportSettingsInput() DialogflowCxSecuritySettingsAudioExportSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplateInput"></a>

```go
func DeidentifyTemplateInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsightsExportSettingsInput`<sup>Optional</sup> <a name="InsightsExportSettingsInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettingsInput"></a>

```go
func InsightsExportSettingsInput() DialogflowCxSecuritySettingsInsightsExportSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplateInput"></a>

```go
func InspectTemplateInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PurgeDataTypesInput`<sup>Optional</sup> <a name="PurgeDataTypesInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypesInput"></a>

```go
func PurgeDataTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedactionScopeInput`<sup>Optional</sup> <a name="RedactionScopeInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScopeInput"></a>

```go
func RedactionScopeInput() *string
```

- *Type:* *string

---

##### `RedactionStrategyInput`<sup>Optional</sup> <a name="RedactionStrategyInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategyInput"></a>

```go
func RedactionStrategyInput() *string
```

- *Type:* *string

---

##### `RetentionStrategyInput`<sup>Optional</sup> <a name="RetentionStrategyInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategyInput"></a>

```go
func RetentionStrategyInput() *string
```

- *Type:* *string

---

##### `RetentionWindowDaysInput`<sup>Optional</sup> <a name="RetentionWindowDaysInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDaysInput"></a>

```go
func RetentionWindowDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplate"></a>

```go
func DeidentifyTemplate() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplate"></a>

```go
func InspectTemplate() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PurgeDataTypes`<sup>Required</sup> <a name="PurgeDataTypes" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypes"></a>

```go
func PurgeDataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RedactionScope`<sup>Required</sup> <a name="RedactionScope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScope"></a>

```go
func RedactionScope() *string
```

- *Type:* *string

---

##### `RedactionStrategy`<sup>Required</sup> <a name="RedactionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategy"></a>

```go
func RedactionStrategy() *string
```

- *Type:* *string

---

##### `RetentionStrategy`<sup>Required</sup> <a name="RetentionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategy"></a>

```go
func RetentionStrategy() *string
```

- *Type:* *string

---

##### `RetentionWindowDays`<sup>Required</sup> <a name="RetentionWindowDays" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDays"></a>

```go
func RetentionWindowDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxSecuritySettingsAudioExportSettings <a name="DialogflowCxSecuritySettingsAudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

&dialogflowcxsecuritysettings.DialogflowCxSecuritySettingsAudioExportSettings {
	AudioExportPattern: *string,
	AudioFormat: *string,
	EnableAudioRedaction: interface{},
	GcsBucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern">AudioExportPattern</a></code> | <code>*string</code> | Filename pattern for exported audio. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat">AudioFormat</a></code> | <code>*string</code> | File format for exported audio file. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction">EnableAudioRedaction</a></code> | <code>interface{}</code> | Enable audio redaction if it is true. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | Cloud Storage bucket to export audio record to. |

---

##### `AudioExportPattern`<sup>Optional</sup> <a name="AudioExportPattern" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern"></a>

```go
AudioExportPattern *string
```

- *Type:* *string

Filename pattern for exported audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#audio_export_pattern DialogflowCxSecuritySettings#audio_export_pattern}

---

##### `AudioFormat`<sup>Optional</sup> <a name="AudioFormat" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat"></a>

```go
AudioFormat *string
```

- *Type:* *string

File format for exported audio file.

Currently only in telephony recordings.

* MULAW: G.711 mu-law PCM with 8kHz sample rate.
* MP3: MP3 file format.
* OGG: OGG Vorbis. Possible values: ["MULAW", "MP3", "OGG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#audio_format DialogflowCxSecuritySettings#audio_format}

---

##### `EnableAudioRedaction`<sup>Optional</sup> <a name="EnableAudioRedaction" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction"></a>

```go
EnableAudioRedaction interface{}
```

- *Type:* interface{}

Enable audio redaction if it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#enable_audio_redaction DialogflowCxSecuritySettings#enable_audio_redaction}

---

##### `GcsBucket`<sup>Optional</sup> <a name="GcsBucket" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket"></a>

```go
GcsBucket *string
```

- *Type:* *string

Cloud Storage bucket to export audio record to.

Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#gcs_bucket DialogflowCxSecuritySettings#gcs_bucket}

---

### DialogflowCxSecuritySettingsConfig <a name="DialogflowCxSecuritySettingsConfig" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

&dialogflowcxsecuritysettings.DialogflowCxSecuritySettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	AudioExportSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings,
	DeidentifyTemplate: *string,
	Id: *string,
	InsightsExportSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings,
	InspectTemplate: *string,
	Project: *string,
	PurgeDataTypes: *[]*string,
	RedactionScope: *string,
	RedactionStrategy: *string,
	RetentionStrategy: *string,
	RetentionWindowDays: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the security settings, unique within the location. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.location">Location</a></code> | <code>*string</code> | The location these settings are located in. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.audioExportSettings">AudioExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a></code> | audio_export_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>*string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#id DialogflowCxSecuritySettings#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.insightsExportSettings">InsightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a></code> | insights_export_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>*string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#project DialogflowCxSecuritySettings#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.purgeDataTypes">PurgeDataTypes</a></code> | <code>*[]*string</code> | List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionScope">RedactionScope</a></code> | <code>*string</code> | Defines what types of data to redact. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionStrategy">RedactionStrategy</a></code> | <code>*string</code> | Defines how we redact data. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionStrategy">RetentionStrategy</a></code> | <code>*string</code> | Defines how long we retain persisted data that contains sensitive info. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionWindowDays">RetentionWindowDays</a></code> | <code>*f64</code> | Retains the data for the specified number of days. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts">DialogflowCxSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the security settings, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#display_name DialogflowCxSecuritySettings#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location these settings are located in.

Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#location DialogflowCxSecuritySettings#location}

---

##### `AudioExportSettings`<sup>Optional</sup> <a name="AudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.audioExportSettings"></a>

```go
AudioExportSettings DialogflowCxSecuritySettingsAudioExportSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

audio_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#audio_export_settings DialogflowCxSecuritySettings#audio_export_settings}

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.deidentifyTemplate"></a>

```go
DeidentifyTemplate *string
```

- *Type:* *string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#deidentify_template DialogflowCxSecuritySettings#deidentify_template}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#id DialogflowCxSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsightsExportSettings`<sup>Optional</sup> <a name="InsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.insightsExportSettings"></a>

```go
InsightsExportSettings DialogflowCxSecuritySettingsInsightsExportSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

insights_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#insights_export_settings DialogflowCxSecuritySettings#insights_export_settings}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.inspectTemplate"></a>

```go
InspectTemplate *string
```

- *Type:* *string

[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#inspect_template DialogflowCxSecuritySettings#inspect_template}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#project DialogflowCxSecuritySettings#project}.

---

##### `PurgeDataTypes`<sup>Optional</sup> <a name="PurgeDataTypes" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.purgeDataTypes"></a>

```go
PurgeDataTypes *[]*string
```

- *Type:* *[]*string

List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#purge_data_types DialogflowCxSecuritySettings#purge_data_types}

---

##### `RedactionScope`<sup>Optional</sup> <a name="RedactionScope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionScope"></a>

```go
RedactionScope *string
```

- *Type:* *string

Defines what types of data to redact.

If not set, defaults to not redacting any kind of data.

* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#redaction_scope DialogflowCxSecuritySettings#redaction_scope}

---

##### `RedactionStrategy`<sup>Optional</sup> <a name="RedactionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionStrategy"></a>

```go
RedactionStrategy *string
```

- *Type:* *string

Defines how we redact data.

If not set, defaults to not redacting.

* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#redaction_strategy DialogflowCxSecuritySettings#redaction_strategy}

---

##### `RetentionStrategy`<sup>Optional</sup> <a name="RetentionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionStrategy"></a>

```go
RetentionStrategy *string
```

- *Type:* *string

Defines how long we retain persisted data that contains sensitive info.

Only one of 'retention_window_days' and 'retention_strategy' may be set.

* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#retention_strategy DialogflowCxSecuritySettings#retention_strategy}

---

##### `RetentionWindowDays`<sup>Optional</sup> <a name="RetentionWindowDays" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionWindowDays"></a>

```go
RetentionWindowDays *f64
```

- *Type:* *f64

Retains the data for the specified number of days.

User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of 'retention_window_days' and 'retention_strategy' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#retention_window_days DialogflowCxSecuritySettings#retention_window_days}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.timeouts"></a>

```go
Timeouts DialogflowCxSecuritySettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts">DialogflowCxSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#timeouts DialogflowCxSecuritySettings#timeouts}

---

### DialogflowCxSecuritySettingsInsightsExportSettings <a name="DialogflowCxSecuritySettingsInsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

&dialogflowcxsecuritysettings.DialogflowCxSecuritySettingsInsightsExportSettings {
	EnableInsightsExport: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport">EnableInsightsExport</a></code> | <code>interface{}</code> | If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. |

---

##### `EnableInsightsExport`<sup>Required</sup> <a name="EnableInsightsExport" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport"></a>

```go
EnableInsightsExport interface{}
```

- *Type:* interface{}

If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#enable_insights_export DialogflowCxSecuritySettings#enable_insights_export}

---

### DialogflowCxSecuritySettingsTimeouts <a name="DialogflowCxSecuritySettingsTimeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

&dialogflowcxsecuritysettings.DialogflowCxSecuritySettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#create DialogflowCxSecuritySettings#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#delete DialogflowCxSecuritySettings#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#update DialogflowCxSecuritySettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#create DialogflowCxSecuritySettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#delete DialogflowCxSecuritySettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_security_settings#update DialogflowCxSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxSecuritySettingsAudioExportSettingsOutputReference <a name="DialogflowCxSecuritySettingsAudioExportSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.NewDialogflowCxSecuritySettingsAudioExportSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxSecuritySettingsAudioExportSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern">ResetAudioExportPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat">ResetAudioFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction">ResetEnableAudioRedaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket">ResetGcsBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioExportPattern` <a name="ResetAudioExportPattern" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern"></a>

```go
func ResetAudioExportPattern()
```

##### `ResetAudioFormat` <a name="ResetAudioFormat" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat"></a>

```go
func ResetAudioFormat()
```

##### `ResetEnableAudioRedaction` <a name="ResetEnableAudioRedaction" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction"></a>

```go
func ResetEnableAudioRedaction()
```

##### `ResetGcsBucket` <a name="ResetGcsBucket" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket"></a>

```go
func ResetGcsBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput">AudioExportPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput">AudioFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput">EnableAudioRedactionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput">GcsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern">AudioExportPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat">AudioFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction">EnableAudioRedaction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExportPatternInput`<sup>Optional</sup> <a name="AudioExportPatternInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput"></a>

```go
func AudioExportPatternInput() *string
```

- *Type:* *string

---

##### `AudioFormatInput`<sup>Optional</sup> <a name="AudioFormatInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput"></a>

```go
func AudioFormatInput() *string
```

- *Type:* *string

---

##### `EnableAudioRedactionInput`<sup>Optional</sup> <a name="EnableAudioRedactionInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput"></a>

```go
func EnableAudioRedactionInput() interface{}
```

- *Type:* interface{}

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput"></a>

```go
func GcsBucketInput() *string
```

- *Type:* *string

---

##### `AudioExportPattern`<sup>Required</sup> <a name="AudioExportPattern" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern"></a>

```go
func AudioExportPattern() *string
```

- *Type:* *string

---

##### `AudioFormat`<sup>Required</sup> <a name="AudioFormat" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat"></a>

```go
func AudioFormat() *string
```

- *Type:* *string

---

##### `EnableAudioRedaction`<sup>Required</sup> <a name="EnableAudioRedaction" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction"></a>

```go
func EnableAudioRedaction() interface{}
```

- *Type:* interface{}

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket"></a>

```go
func GcsBucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxSecuritySettingsAudioExportSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

---


### DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference <a name="DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.NewDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput">EnableInsightsExportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport">EnableInsightsExport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInsightsExportInput`<sup>Optional</sup> <a name="EnableInsightsExportInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput"></a>

```go
func EnableInsightsExportInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInsightsExport`<sup>Required</sup> <a name="EnableInsightsExport" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport"></a>

```go
func EnableInsightsExport() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxSecuritySettingsInsightsExportSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

---


### DialogflowCxSecuritySettingsTimeoutsOutputReference <a name="DialogflowCxSecuritySettingsTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dialogflowcxsecuritysettings"

dialogflowcxsecuritysettings.NewDialogflowCxSecuritySettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxSecuritySettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



