# `sccV2OrganizationNotificationConfig` Submodule <a name="`sccV2OrganizationNotificationConfig` Submodule" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationNotificationConfig <a name="SccV2OrganizationNotificationConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config google_scc_v2_organization_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.NewSccV2OrganizationNotificationConfig(scope Construct, id *string, config SccV2OrganizationNotificationConfigConfig) SccV2OrganizationNotificationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig">SccV2OrganizationNotificationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig">SccV2OrganizationNotificationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig">PutStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamingConfig` <a name="PutStreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig"></a>

```go
func PutStreamingConfig(value SccV2OrganizationNotificationConfigStreamingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts"></a>

```go
func PutTimeouts(value SccV2OrganizationNotificationConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccV2OrganizationNotificationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccV2OrganizationNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfig">StreamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference">SccV2OrganizationNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference">SccV2OrganizationNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfigInput">StreamingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `StreamingConfig`<sup>Required</sup> <a name="StreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfig"></a>

```go
func StreamingConfig() SccV2OrganizationNotificationConfigStreamingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference">SccV2OrganizationNotificationConfigStreamingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeouts"></a>

```go
func Timeouts() SccV2OrganizationNotificationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference">SccV2OrganizationNotificationConfigTimeoutsOutputReference</a>

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `StreamingConfigInput`<sup>Optional</sup> <a name="StreamingConfigInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfigInput"></a>

```go
func StreamingConfigInput() SccV2OrganizationNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationNotificationConfigConfig <a name="SccV2OrganizationNotificationConfigConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

&sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigId: *string,
	Organization: *string,
	PubsubTopic: *string,
	StreamingConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig,
	Description: *string,
	Id: *string,
	Location: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.configId">ConfigId</a></code> | <code>*string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization whose Cloud Security Command Center the Notification Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.streamingConfig">StreamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.description">Description</a></code> | <code>*string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.location">Location</a></code> | <code>*string</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#config_id SccV2OrganizationNotificationConfig#config_id}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization whose Cloud Security Command Center the Notification Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#organization SccV2OrganizationNotificationConfig#organization}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#pubsub_topic SccV2OrganizationNotificationConfig#pubsub_topic}

---

##### `StreamingConfig`<sup>Required</sup> <a name="StreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.streamingConfig"></a>

```go
StreamingConfig SccV2OrganizationNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#streaming_config SccV2OrganizationNotificationConfig#streaming_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#description SccV2OrganizationNotificationConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#location SccV2OrganizationNotificationConfig#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.timeouts"></a>

```go
Timeouts SccV2OrganizationNotificationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#timeouts SccV2OrganizationNotificationConfig#timeouts}

---

### SccV2OrganizationNotificationConfigStreamingConfig <a name="SccV2OrganizationNotificationConfigStreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

&sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfigStreamingConfig {
	Filter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.property.filter">Filter</a></code> | <code>*string</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#filter SccV2OrganizationNotificationConfig#filter}

---

### SccV2OrganizationNotificationConfigTimeouts <a name="SccV2OrganizationNotificationConfigTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

&sccv2organizationnotificationconfig.SccV2OrganizationNotificationConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationNotificationConfigStreamingConfigOutputReference <a name="SccV2OrganizationNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.NewSccV2OrganizationNotificationConfigStreamingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccV2OrganizationNotificationConfigStreamingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SccV2OrganizationNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---


### SccV2OrganizationNotificationConfigTimeoutsOutputReference <a name="SccV2OrganizationNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccv2organizationnotificationconfig"

sccv2organizationnotificationconfig.NewSccV2OrganizationNotificationConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccV2OrganizationNotificationConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



