# `dataprocGdcServiceInstance` Submodule <a name="`dataprocGdcServiceInstance` Submodule" id="@cdktf/provider-google.dataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcServiceInstance <a name="DataprocGdcServiceInstance" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.NewDataprocGdcServiceInstance(scope Construct, id *string, config DataprocGdcServiceInstanceConfig) DataprocGdcServiceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig">DataprocGdcServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig">DataprocGdcServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster">PutGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig">PutSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetGdceCluster">ResetGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetSparkServiceInstanceConfig">ResetSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGdceCluster` <a name="PutGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster"></a>

```go
func PutGdceCluster(value DataprocGdcServiceInstanceGdceCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---

##### `PutSparkServiceInstanceConfig` <a name="PutSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```go
func PutSparkServiceInstanceConfig(value DataprocGdcServiceInstanceSparkServiceInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts"></a>

```go
func PutTimeouts(value DataprocGdcServiceInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGdceCluster` <a name="ResetGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetGdceCluster"></a>

```go
func ResetGdceCluster()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSparkServiceInstanceConfig` <a name="ResetSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```go
func ResetSparkServiceInstanceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.DataprocGdcServiceInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.DataprocGdcServiceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.DataprocGdcServiceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.DataprocGdcServiceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataprocGdcServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveServiceAccount">EffectiveServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceCluster">GdceCluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference">DataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.requestedState">RequestedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfig">SparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference">DataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceClusterInput">GdceClusterInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceIdInput">ServiceInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">SparkServiceInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveServiceAccount`<sup>Required</sup> <a name="EffectiveServiceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```go
func EffectiveServiceAccount() *string
```

- *Type:* *string

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceCluster"></a>

```go
func GdceCluster() DataprocGdcServiceInstanceGdceClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference">DataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequestedState`<sup>Required</sup> <a name="RequestedState" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.requestedState"></a>

```go
func RequestedState() *string
```

- *Type:* *string

---

##### `SparkServiceInstanceConfig`<sup>Required</sup> <a name="SparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```go
func SparkServiceInstanceConfig() DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeouts"></a>

```go
func Timeouts() DataprocGdcServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference">DataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GdceClusterInput`<sup>Optional</sup> <a name="GdceClusterInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceClusterInput"></a>

```go
func GdceClusterInput() DataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceInstanceIdInput`<sup>Optional</sup> <a name="ServiceInstanceIdInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```go
func ServiceInstanceIdInput() *string
```

- *Type:* *string

---

##### `SparkServiceInstanceConfigInput`<sup>Optional</sup> <a name="SparkServiceInstanceConfigInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```go
func SparkServiceInstanceConfigInput() DataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceId"></a>

```go
func ServiceInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcServiceInstanceConfig <a name="DataprocGdcServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

&dataprocgdcserviceinstance.DataprocGdcServiceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ServiceInstanceId: *string,
	DisplayName: *string,
	GdceCluster: github.com/cdktf/cdktf-provider-google-go/google/v14.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ServiceAccount: *string,
	SparkServiceInstanceConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceInstanceId">ServiceInstanceId</a></code> | <code>*string</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.gdceCluster">GdceCluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">SparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#location DataprocGdcServiceInstance#location}

---

##### `ServiceInstanceId`<sup>Required</sup> <a name="ServiceInstanceId" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```go
ServiceInstanceId *string
```

- *Type:* *string

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#service_instance_id DataprocGdcServiceInstance#service_instance_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#display_name DataprocGdcServiceInstance#display_name}

---

##### `GdceCluster`<sup>Optional</sup> <a name="GdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```go
GdceCluster DataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#labels DataprocGdcServiceInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#service_account DataprocGdcServiceInstance#service_account}

---

##### `SparkServiceInstanceConfig`<sup>Optional</sup> <a name="SparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```go
SparkServiceInstanceConfig DataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#spark_service_instance_config DataprocGdcServiceInstance#spark_service_instance_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.timeouts"></a>

```go
Timeouts DataprocGdcServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#timeouts DataprocGdcServiceInstance#timeouts}

---

### DataprocGdcServiceInstanceGdceCluster <a name="DataprocGdcServiceInstanceGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

&dataprocgdcserviceinstance.DataprocGdcServiceInstanceGdceCluster {
	GdceCluster: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.property.gdceCluster">GdceCluster</a></code> | <code>*string</code> | Gdce cluster resource id. |

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```go
GdceCluster *string
```

- *Type:* *string

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

### DataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="DataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

&dataprocgdcserviceinstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig {

}
```


### DataprocGdcServiceInstanceTimeouts <a name="DataprocGdcServiceInstanceTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

&dataprocgdcserviceinstance.DataprocGdcServiceInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcServiceInstanceGdceClusterOutputReference <a name="DataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.NewDataprocGdcServiceInstanceGdceClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocGdcServiceInstanceGdceClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">GdceClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">GdceCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GdceClusterInput`<sup>Optional</sup> <a name="GdceClusterInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```go
func GdceClusterInput() *string
```

- *Type:* *string

---

##### `GdceCluster`<sup>Required</sup> <a name="GdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```go
func GdceCluster() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---


### DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.NewDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### DataprocGdcServiceInstanceTimeoutsOutputReference <a name="DataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocgdcserviceinstance"

dataprocgdcserviceinstance.NewDataprocGdcServiceInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocGdcServiceInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



