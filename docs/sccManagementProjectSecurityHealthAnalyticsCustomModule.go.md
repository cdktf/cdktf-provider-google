# `sccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementProjectSecurityHealthAnalyticsCustomModule <a name="SccManagementProjectSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module google_scc_management_project_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModule(scope Construct, id *string, config SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig) SccManagementProjectSecurityHealthAnalyticsCustomModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig">PutCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig">ResetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState">ResetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomConfig` <a name="PutCustomConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```go
func PutCustomConfig(value SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```go
func PutTimeouts(value SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `ResetCustomConfig` <a name="ResetCustomConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```go
func ResetCustomConfig()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnablementState` <a name="ResetEnablementState" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```go
func ResetEnablementState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccManagementProjectSecurityHealthAnalyticsCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccManagementProjectSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementProjectSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule">AncestorModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor">LastEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput">CustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState">EnablementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorModule`<sup>Required</sup> <a name="AncestorModule" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```go
func AncestorModule() *string
```

- *Type:* *string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```go
func CustomConfig() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```go
func LastEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```go
func Timeouts() SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```go
func CustomConfigInput() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```go
func EnablementStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```go
func EnablementState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig,
	DisplayName: *string,
	EnablementState: *string,
	Id: *string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>*string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location">Location</a></code> | <code>*string</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomConfig`<sup>Optional</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```go
CustomConfig SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_config SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#display_name SccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}

---

##### `EnablementState`<sup>Optional</sup> <a name="EnablementState" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```go
EnablementState *string
```

- *Type:* *string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#enablement_state SccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```go
Timeouts SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#timeouts SccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig {
	Predicate: github.com/cdktf/cdktf-provider-google-go/google/v14.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate,
	Recommendation: *string,
	ResourceSelector: github.com/cdktf/cdktf-provider-google-go/google/v14.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector,
	Severity: *string,
	CustomOutput: github.com/cdktf/cdktf-provider-google-go/google/v14.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">Recommendation</a></code> | <code>*string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">Severity</a></code> | <code>*string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">Description</a></code> | <code>*string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```go
Predicate SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#predicate SccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```go
Recommendation *string
```

- *Type:* *string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#recommendation SccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```go
ResourceSelector SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_selector SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#severity SccManagementProjectSecurityHealthAnalyticsCustomModule#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```go
CustomOutput SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_output SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput {
	Properties: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">Properties</a></code> | <code>interface{}</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```go
Properties interface{}
```

- *Type:* interface{}

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#properties SccManagementProjectSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties {
	Name: *string,
	ValueExpression: github.com/cdktf/cdktf-provider-google-go/google/v14.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">Name</a></code> | <code>*string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#name SccManagementProjectSecurityHealthAnalyticsCustomModule#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```go
ValueExpression SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#value_expression SccManagementProjectSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector {
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_types SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

&sccmanagementprojectsecurityhealthanalyticscustommodule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#create SccManagementProjectSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#delete SccManagementProjectSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#update SccManagementProjectSecurityHealthAnalyticsCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#create SccManagementProjectSecurityHealthAnalyticsCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#delete SccManagementProjectSecurityHealthAnalyticsCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/scc_management_project_security_health_analytics_custom_module#update SccManagementProjectSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```go
func PutProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```go
func Properties() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```go
func Get(index *f64) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```go
func PutValueExpression(value SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```go
func ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```go
func ValueExpression() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```go
func ValueExpressionInput() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```go
func PutCustomOutput(value SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```go
func PutPredicate(value SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```go
func PutResourceSelector(value SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```go
func ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```go
func CustomOutput() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```go
func Predicate() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```go
func ResourceSelector() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```go
func CustomOutputInput() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```go
func PredicateInput() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```go
func RecommendationInput() *string
```

- *Type:* *string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```go
func ResourceSelectorInput() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccmanagementprojectsecurityhealthanalyticscustommodule"

sccmanagementprojectsecurityhealthanalyticscustommodule.NewSccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



