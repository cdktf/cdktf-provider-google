# `sccManagementOrganizationSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementOrganizationSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementOrganizationSecurityHealthAnalyticsCustomModule <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module google_scc_management_organization_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModule(scope Construct, id *string, config SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig) SccManagementOrganizationSecurityHealthAnalyticsCustomModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig">PutCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetCustomConfig">ResetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetEnablementState">ResetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomConfig` <a name="PutCustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```go
func PutCustomConfig(value SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```go
func PutTimeouts(value SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `ResetCustomConfig` <a name="ResetCustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```go
func ResetCustomConfig()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnablementState` <a name="ResetEnablementState" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```go
func ResetEnablementState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccManagementOrganizationSecurityHealthAnalyticsCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccManagementOrganizationSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementOrganizationSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.ancestorModule">AncestorModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lastEditor">LastEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfigInput">CustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementState">EnablementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorModule`<sup>Required</sup> <a name="AncestorModule" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```go
func AncestorModule() *string
```

- *Type:* *string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```go
func CustomConfig() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```go
func LastEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```go
func Timeouts() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```go
func CustomConfigInput() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```go
func EnablementStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```go
func EnablementState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	CustomConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig,
	DisplayName: *string,
	EnablementState: *string,
	Id: *string,
	Location: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.organization">Organization</a></code> | <code>*string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>*string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#id SccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.location">Location</a></code> | <code>*string</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#organization SccManagementOrganizationSecurityHealthAnalyticsCustomModule#organization}

---

##### `CustomConfig`<sup>Optional</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```go
CustomConfig SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#custom_config SccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#display_name SccManagementOrganizationSecurityHealthAnalyticsCustomModule#display_name}

---

##### `EnablementState`<sup>Optional</sup> <a name="EnablementState" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```go
EnablementState *string
```

- *Type:* *string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#enablement_state SccManagementOrganizationSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#id SccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```go
Timeouts SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#timeouts SccManagementOrganizationSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig {
	Predicate: github.com/cdktf/cdktf-provider-google-go/google/v16.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate,
	Recommendation: *string,
	ResourceSelector: github.com/cdktf/cdktf-provider-google-go/google/v16.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector,
	Severity: *string,
	CustomOutput: github.com/cdktf/cdktf-provider-google-go/google/v16.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">Recommendation</a></code> | <code>*string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">Severity</a></code> | <code>*string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">Description</a></code> | <code>*string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```go
Predicate SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#predicate SccManagementOrganizationSecurityHealthAnalyticsCustomModule#predicate}

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```go
Recommendation *string
```

- *Type:* *string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#recommendation SccManagementOrganizationSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```go
ResourceSelector SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#resource_selector SccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#severity SccManagementOrganizationSecurityHealthAnalyticsCustomModule#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```go
CustomOutput SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#custom_output SccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput {
	Properties: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">Properties</a></code> | <code>interface{}</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```go
Properties interface{}
```

- *Type:* interface{}

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#properties SccManagementOrganizationSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties {
	Name: *string,
	ValueExpression: github.com/cdktf/cdktf-provider-google-go/google/v16.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">Name</a></code> | <code>*string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#name SccManagementOrganizationSecurityHealthAnalyticsCustomModule#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```go
ValueExpression SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#value_expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#title SccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#title SccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector {
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#resource_types SccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

&sccmanagementorganizationsecurityhealthanalyticscustommodule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#create SccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#delete SccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#update SccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#create SccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#delete SccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#update SccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```go
func PutProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```go
func Properties() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```go
func Get(index *f64) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```go
func PutValueExpression(value SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```go
func ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```go
func ValueExpression() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```go
func ValueExpressionInput() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```go
func PutCustomOutput(value SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```go
func PutPredicate(value SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```go
func PutResourceSelector(value SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```go
func ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```go
func CustomOutput() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```go
func Predicate() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```go
func ResourceSelector() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```go
func CustomOutputInput() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```go
func PredicateInput() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```go
func RecommendationInput() *string
```

- *Type:* *string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```go
func ResourceSelectorInput() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/sccmanagementorganizationsecurityhealthanalyticscustommodule"

sccmanagementorganizationsecurityhealthanalyticscustommodule.NewSccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



