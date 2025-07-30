# `storageControlOrganizationIntelligenceConfig` Submodule <a name="`storageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageControlOrganizationIntelligenceConfig <a name="StorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfig(scope Construct, id *string, config StorageControlOrganizationIntelligenceConfigConfig) StorageControlOrganizationIntelligenceConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig">StorageControlOrganizationIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig">StorageControlOrganizationIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetEditionConfig">ResetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putFilter"></a>

```go
func PutFilter(value StorageControlOrganizationIntelligenceConfigFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putTimeouts"></a>

```go
func PutTimeouts(value StorageControlOrganizationIntelligenceConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `ResetEditionConfig` <a name="ResetEditionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetEditionConfig"></a>

```go
func ResetEditionConfig()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference">StorageControlOrganizationIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.trialConfig">TrialConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList">StorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfigInput">EditionConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```go
func EffectiveIntelligenceConfig() StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filter"></a>

```go
func Filter() StorageControlOrganizationIntelligenceConfigFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference">StorageControlOrganizationIntelligenceConfigFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeouts"></a>

```go
func Timeouts() StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a>

---

##### `TrialConfig`<sup>Required</sup> <a name="TrialConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```go
func TrialConfig() StorageControlOrganizationIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList">StorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EditionConfigInput`<sup>Optional</sup> <a name="EditionConfigInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfigInput"></a>

```go
func EditionConfigInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filterInput"></a>

```go
func FilterInput() StorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```go
func EditionConfig() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageControlOrganizationIntelligenceConfigConfig <a name="StorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EditionConfig: *string,
	Filter: github.com/cdktf/cdktf-provider-google-go/google/v16.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.name">Name</a></code> | <code>*string</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#id StorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#name StorageControlOrganizationIntelligenceConfig#name}

---

##### `EditionConfig`<sup>Optional</sup> <a name="EditionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.editionConfig"></a>

```go
EditionConfig *string
```

- *Type:* *string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#edition_config StorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.filter"></a>

```go
Filter StorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#filter StorageControlOrganizationIntelligenceConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#id StorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.timeouts"></a>

```go
Timeouts StorageControlOrganizationIntelligenceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#timeouts StorageControlOrganizationIntelligenceConfig#timeouts}

---

### StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig {

}
```


### StorageControlOrganizationIntelligenceConfigFilter <a name="StorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigFilter {
	ExcludedCloudStorageBuckets: github.com/cdktf/cdktf-provider-google-go/google/v16.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets,
	ExcludedCloudStorageLocations: github.com/cdktf/cdktf-provider-google-go/google/v16.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations,
	IncludedCloudStorageBuckets: github.com/cdktf/cdktf-provider-google-go/google/v16.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets,
	IncludedCloudStorageLocations: github.com/cdktf/cdktf-provider-google-go/google/v16.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `ExcludedCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```go
ExcludedCloudStorageBuckets StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#excluded_cloud_storage_buckets StorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `ExcludedCloudStorageLocations`<sup>Optional</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```go
ExcludedCloudStorageLocations StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#excluded_cloud_storage_locations StorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `IncludedCloudStorageBuckets`<sup>Optional</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```go
IncludedCloudStorageBuckets StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#included_cloud_storage_buckets StorageControlOrganizationIntelligenceConfig#included_cloud_storage_buckets}

---

##### `IncludedCloudStorageLocations`<sup>Optional</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```go
IncludedCloudStorageLocations StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#included_cloud_storage_locations StorageControlOrganizationIntelligenceConfig#included_cloud_storage_locations}

---

### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#bucket_id_regexes StorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#locations StorageControlOrganizationIntelligenceConfig#locations}

---

### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets {
	BucketIdRegexes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```go
BucketIdRegexes *[]*string
```

- *Type:* *[]*string

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#bucket_id_regexes StorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations {
	Locations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">Locations</a></code> | <code>*[]*string</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#locations StorageControlOrganizationIntelligenceConfig#locations}

---

### StorageControlOrganizationIntelligenceConfigTimeouts <a name="StorageControlOrganizationIntelligenceConfigTimeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#create StorageControlOrganizationIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#delete StorageControlOrganizationIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#update StorageControlOrganizationIntelligenceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#create StorageControlOrganizationIntelligenceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#delete StorageControlOrganizationIntelligenceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_control_organization_intelligence_config#update StorageControlOrganizationIntelligenceConfig#update}.

---

### StorageControlOrganizationIntelligenceConfigTrialConfig <a name="StorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

&storagecontrolorganizationintelligenceconfig.StorageControlOrganizationIntelligenceConfigTrialConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```go
func Get(index *f64) StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```go
func EffectiveEdition() *string
```

- *Type:* *string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```go
func IntelligenceConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```go
func BucketIdRegexesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### StorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageControlOrganizationIntelligenceConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">PutExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">PutExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">PutIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">ResetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">ResetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">ResetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">ResetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedCloudStorageBuckets` <a name="PutExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```go
func PutExcludedCloudStorageBuckets(value StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `PutExcludedCloudStorageLocations` <a name="PutExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```go
func PutExcludedCloudStorageLocations(value StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```go
func PutIncludedCloudStorageBuckets(value StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `PutIncludedCloudStorageLocations` <a name="PutIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```go
func PutIncludedCloudStorageLocations(value StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `ResetExcludedCloudStorageBuckets` <a name="ResetExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```go
func ResetExcludedCloudStorageBuckets()
```

##### `ResetExcludedCloudStorageLocations` <a name="ResetExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```go
func ResetExcludedCloudStorageLocations()
```

##### `ResetIncludedCloudStorageBuckets` <a name="ResetIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```go
func ResetIncludedCloudStorageBuckets()
```

##### `ResetIncludedCloudStorageLocations` <a name="ResetIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```go
func ResetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">ExcludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">ExcludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">IncludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```go
func ExcludedCloudStorageBuckets() StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```go
func ExcludedCloudStorageLocations() StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```go
func IncludedCloudStorageBuckets() StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```go
func IncludedCloudStorageLocations() StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `ExcludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```go
func ExcludedCloudStorageBucketsInput() StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `ExcludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```go
func ExcludedCloudStorageLocationsInput() StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```go
func IncludedCloudStorageBucketsInput() StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `IncludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```go
func IncludedCloudStorageLocationsInput() StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

---


### StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference <a name="StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageControlOrganizationIntelligenceConfigTrialConfigList <a name="StorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigTrialConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageControlOrganizationIntelligenceConfigTrialConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```go
func Get(index *f64) StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/storagecontrolorganizationintelligenceconfig"

storagecontrolorganizationintelligenceconfig.NewStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig">StorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageControlOrganizationIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig">StorageControlOrganizationIntelligenceConfigTrialConfig</a>

---



