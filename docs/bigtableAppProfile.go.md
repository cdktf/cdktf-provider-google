# `bigtableAppProfile` Submodule <a name="`bigtableAppProfile` Submodule" id="@cdktf/provider-google.bigtableAppProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAppProfile <a name="BigtableAppProfile" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile google_bigtable_app_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.NewBigtableAppProfile(scope Construct, id *string, config BigtableAppProfileConfig) BigtableAppProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig">BigtableAppProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig">BigtableAppProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly">PutDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting">PutSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation">PutStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly">ResetDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds">ResetMultiClusterRoutingClusterIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny">ResetMultiClusterRoutingUseAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetRowAffinity">ResetRowAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting">ResetSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation">ResetStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataBoostIsolationReadOnly` <a name="PutDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly"></a>

```go
func PutDataBoostIsolationReadOnly(value BigtableAppProfileDataBoostIsolationReadOnly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `PutSingleClusterRouting` <a name="PutSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting"></a>

```go
func PutSingleClusterRouting(value BigtableAppProfileSingleClusterRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `PutStandardIsolation` <a name="PutStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation"></a>

```go
func PutStandardIsolation(value BigtableAppProfileStandardIsolation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts"></a>

```go
func PutTimeouts(value BigtableAppProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---

##### `ResetDataBoostIsolationReadOnly` <a name="ResetDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly"></a>

```go
func ResetDataBoostIsolationReadOnly()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings"></a>

```go
func ResetIgnoreWarnings()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetMultiClusterRoutingClusterIds` <a name="ResetMultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds"></a>

```go
func ResetMultiClusterRoutingClusterIds()
```

##### `ResetMultiClusterRoutingUseAny` <a name="ResetMultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny"></a>

```go
func ResetMultiClusterRoutingUseAny()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRowAffinity` <a name="ResetRowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetRowAffinity"></a>

```go
func ResetRowAffinity()
```

##### `ResetSingleClusterRouting` <a name="ResetSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting"></a>

```go
func ResetSingleClusterRouting()
```

##### `ResetStandardIsolation` <a name="ResetStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation"></a>

```go
func ResetStandardIsolation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.BigtableAppProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.BigtableAppProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.BigtableAppProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.BigtableAppProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigtableAppProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigtableAppProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAppProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly">DataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting">SingleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation">StandardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput">AppProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput">DataBoostIsolationReadOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput">MultiClusterRoutingClusterIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput">MultiClusterRoutingUseAnyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinityInput">RowAffinityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput">SingleClusterRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput">StandardIsolationInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId">AppProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds">MultiClusterRoutingClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny">MultiClusterRoutingUseAny</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinity">RowAffinity</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataBoostIsolationReadOnly`<sup>Required</sup> <a name="DataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly"></a>

```go
func DataBoostIsolationReadOnly() BigtableAppProfileDataBoostIsolationReadOnlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SingleClusterRouting`<sup>Required</sup> <a name="SingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting"></a>

```go
func SingleClusterRouting() BigtableAppProfileSingleClusterRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a>

---

##### `StandardIsolation`<sup>Required</sup> <a name="StandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation"></a>

```go
func StandardIsolation() BigtableAppProfileStandardIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts"></a>

```go
func Timeouts() BigtableAppProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a>

---

##### `AppProfileIdInput`<sup>Optional</sup> <a name="AppProfileIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput"></a>

```go
func AppProfileIdInput() *string
```

- *Type:* *string

---

##### `DataBoostIsolationReadOnlyInput`<sup>Optional</sup> <a name="DataBoostIsolationReadOnlyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput"></a>

```go
func DataBoostIsolationReadOnlyInput() BigtableAppProfileDataBoostIsolationReadOnly
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput"></a>

```go
func IgnoreWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `MultiClusterRoutingClusterIdsInput`<sup>Optional</sup> <a name="MultiClusterRoutingClusterIdsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput"></a>

```go
func MultiClusterRoutingClusterIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MultiClusterRoutingUseAnyInput`<sup>Optional</sup> <a name="MultiClusterRoutingUseAnyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput"></a>

```go
func MultiClusterRoutingUseAnyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RowAffinityInput`<sup>Optional</sup> <a name="RowAffinityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinityInput"></a>

```go
func RowAffinityInput() interface{}
```

- *Type:* interface{}

---

##### `SingleClusterRoutingInput`<sup>Optional</sup> <a name="SingleClusterRoutingInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput"></a>

```go
func SingleClusterRoutingInput() BigtableAppProfileSingleClusterRouting
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `StandardIsolationInput`<sup>Optional</sup> <a name="StandardIsolationInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput"></a>

```go
func StandardIsolationInput() BigtableAppProfileStandardIsolation
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppProfileId`<sup>Required</sup> <a name="AppProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId"></a>

```go
func AppProfileId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings"></a>

```go
func IgnoreWarnings() interface{}
```

- *Type:* interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `MultiClusterRoutingClusterIds`<sup>Required</sup> <a name="MultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds"></a>

```go
func MultiClusterRoutingClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `MultiClusterRoutingUseAny`<sup>Required</sup> <a name="MultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny"></a>

```go
func MultiClusterRoutingUseAny() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RowAffinity`<sup>Required</sup> <a name="RowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinity"></a>

```go
func RowAffinity() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAppProfileConfig <a name="BigtableAppProfileConfig" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

&bigtableappprofile.BigtableAppProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppProfileId: *string,
	DataBoostIsolationReadOnly: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly,
	Description: *string,
	Id: *string,
	IgnoreWarnings: interface{},
	Instance: *string,
	MultiClusterRoutingClusterIds: *[]*string,
	MultiClusterRoutingUseAny: interface{},
	Project: *string,
	RowAffinity: interface{},
	SingleClusterRouting: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableAppProfile.BigtableAppProfileSingleClusterRouting,
	StandardIsolation: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableAppProfile.BigtableAppProfileStandardIsolation,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableAppProfile.BigtableAppProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId">AppProfileId</a></code> | <code>*string</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly">DataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description">Description</a></code> | <code>*string</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>interface{}</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance">Instance</a></code> | <code>*string</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds">MultiClusterRoutingClusterIds</a></code> | <code>*[]*string</code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny">MultiClusterRoutingUseAny</a></code> | <code>interface{}</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.rowAffinity">RowAffinity</a></code> | <code>interface{}</code> | Must be used with multi-cluster routing. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting">SingleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation">StandardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppProfileId`<sup>Required</sup> <a name="AppProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId"></a>

```go
AppProfileId *string
```

- *Type:* *string

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#app_profile_id BigtableAppProfile#app_profile_id}

---

##### `DataBoostIsolationReadOnly`<sup>Optional</sup> <a name="DataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly"></a>

```go
DataBoostIsolationReadOnly BigtableAppProfileDataBoostIsolationReadOnly
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#data_boost_isolation_read_only BigtableAppProfile#data_boost_isolation_read_only}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#description BigtableAppProfile#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings"></a>

```go
IgnoreWarnings interface{}
```

- *Type:* interface{}

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#ignore_warnings BigtableAppProfile#ignore_warnings}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#instance BigtableAppProfile#instance}

---

##### `MultiClusterRoutingClusterIds`<sup>Optional</sup> <a name="MultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds"></a>

```go
MultiClusterRoutingClusterIds *[]*string
```

- *Type:* *[]*string

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#multi_cluster_routing_cluster_ids BigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `MultiClusterRoutingUseAny`<sup>Optional</sup> <a name="MultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny"></a>

```go
MultiClusterRoutingUseAny interface{}
```

- *Type:* interface{}

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}.

---

##### `RowAffinity`<sup>Optional</sup> <a name="RowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.rowAffinity"></a>

```go
RowAffinity interface{}
```

- *Type:* interface{}

Must be used with multi-cluster routing.

If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#row_affinity BigtableAppProfile#row_affinity}

---

##### `SingleClusterRouting`<sup>Optional</sup> <a name="SingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting"></a>

```go
SingleClusterRouting BigtableAppProfileSingleClusterRouting
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#single_cluster_routing BigtableAppProfile#single_cluster_routing}

---

##### `StandardIsolation`<sup>Optional</sup> <a name="StandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation"></a>

```go
StandardIsolation BigtableAppProfileStandardIsolation
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#standard_isolation BigtableAppProfile#standard_isolation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts"></a>

```go
Timeouts BigtableAppProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#timeouts BigtableAppProfile#timeouts}

---

### BigtableAppProfileDataBoostIsolationReadOnly <a name="BigtableAppProfileDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

&bigtableappprofile.BigtableAppProfileDataBoostIsolationReadOnly {
	ComputeBillingOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner">ComputeBillingOwner</a></code> | <code>*string</code> | The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]. |

---

##### `ComputeBillingOwner`<sup>Required</sup> <a name="ComputeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner"></a>

```go
ComputeBillingOwner *string
```

- *Type:* *string

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#compute_billing_owner BigtableAppProfile#compute_billing_owner}

---

### BigtableAppProfileSingleClusterRouting <a name="BigtableAppProfileSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

&bigtableappprofile.BigtableAppProfileSingleClusterRouting {
	ClusterId: *string,
	AllowTransactionalWrites: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId">ClusterId</a></code> | <code>*string</code> | The cluster to which read/write requests should be routed. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites">AllowTransactionalWrites</a></code> | <code>interface{}</code> | If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#cluster_id BigtableAppProfile#cluster_id}

---

##### `AllowTransactionalWrites`<sup>Optional</sup> <a name="AllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites"></a>

```go
AllowTransactionalWrites interface{}
```

- *Type:* interface{}

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#allow_transactional_writes BigtableAppProfile#allow_transactional_writes}

---

### BigtableAppProfileStandardIsolation <a name="BigtableAppProfileStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

&bigtableappprofile.BigtableAppProfileStandardIsolation {
	Priority: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority">Priority</a></code> | <code>*string</code> | The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. |

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#priority BigtableAppProfile#priority}

---

### BigtableAppProfileTimeouts <a name="BigtableAppProfileTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

&bigtableappprofile.BigtableAppProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAppProfileDataBoostIsolationReadOnlyOutputReference <a name="BigtableAppProfileDataBoostIsolationReadOnlyOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.NewBigtableAppProfileDataBoostIsolationReadOnlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableAppProfileDataBoostIsolationReadOnlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput">ComputeBillingOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner">ComputeBillingOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeBillingOwnerInput`<sup>Optional</sup> <a name="ComputeBillingOwnerInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput"></a>

```go
func ComputeBillingOwnerInput() *string
```

- *Type:* *string

---

##### `ComputeBillingOwner`<sup>Required</sup> <a name="ComputeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner"></a>

```go
func ComputeBillingOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableAppProfileDataBoostIsolationReadOnly
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---


### BigtableAppProfileSingleClusterRoutingOutputReference <a name="BigtableAppProfileSingleClusterRoutingOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.NewBigtableAppProfileSingleClusterRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableAppProfileSingleClusterRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites">ResetAllowTransactionalWrites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowTransactionalWrites` <a name="ResetAllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites"></a>

```go
func ResetAllowTransactionalWrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput">AllowTransactionalWritesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites">AllowTransactionalWrites</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowTransactionalWritesInput`<sup>Optional</sup> <a name="AllowTransactionalWritesInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput"></a>

```go
func AllowTransactionalWritesInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `AllowTransactionalWrites`<sup>Required</sup> <a name="AllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites"></a>

```go
func AllowTransactionalWrites() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableAppProfileSingleClusterRouting
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---


### BigtableAppProfileStandardIsolationOutputReference <a name="BigtableAppProfileStandardIsolationOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.NewBigtableAppProfileStandardIsolationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableAppProfileStandardIsolationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableAppProfileStandardIsolation
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---


### BigtableAppProfileTimeoutsOutputReference <a name="BigtableAppProfileTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableappprofile"

bigtableappprofile.NewBigtableAppProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableAppProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



