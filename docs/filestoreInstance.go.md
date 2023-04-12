# `filestoreInstance` Submodule <a name="`filestoreInstance` Submodule" id="@cdktf/provider-google.filestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FilestoreInstance <a name="FilestoreInstance" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstance(scope Construct, id *string, config FilestoreInstanceConfig) FilestoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig">FilestoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig">FilestoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares">PutFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFileShares` <a name="PutFileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares"></a>

```go
func PutFileShares(value FilestoreInstanceFileShares)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putFileShares.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts"></a>

```go
func PutTimeouts(value FilestoreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.FilestoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.FilestoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.FilestoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileShares">FileShares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput">FileSharesInput</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileShares"></a>

```go
func FileShares() FilestoreInstanceFileSharesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference">FilestoreInstanceFileSharesOutputReference</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networks"></a>

```go
func Networks() FilestoreInstanceNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList">FilestoreInstanceNetworksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeouts"></a>

```go
func Timeouts() FilestoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference">FilestoreInstanceTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FileSharesInput`<sup>Optional</sup> <a name="FileSharesInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.fileSharesInput"></a>

```go
func FileSharesInput() FilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.filestoreInstance.FilestoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FilestoreInstanceConfig <a name="FilestoreInstanceConfig" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

&filestoreinstance.FilestoreInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileShares: github.com/cdktf/cdktf-provider-google-go/google.filestoreInstance.FilestoreInstanceFileShares,
	Name: *string,
	Networks: interface{},
	Tier: *string,
	Description: *string,
	Id: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.filestoreInstance.FilestoreInstanceTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares">FileShares</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | file_shares block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier">Tier</a></code> | <code>*string</code> | The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD and ENTERPRISE. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description">Description</a></code> | <code>*string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#id FilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | KMS key name used for data encryption. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#project FilestoreInstance#project}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone">Zone</a></code> | <code>*string</code> | The name of the Filestore zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileShares`<sup>Required</sup> <a name="FileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.fileShares"></a>

```go
FileShares FilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

file_shares block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#file_shares FilestoreInstance#file_shares}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#name FilestoreInstance#name}

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#networks FilestoreInstance#networks}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD and ENTERPRISE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#tier FilestoreInstance#tier}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#description FilestoreInstance#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#id FilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

KMS key name used for data encryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#kms_key_name FilestoreInstance#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#labels FilestoreInstance#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#location FilestoreInstance#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#project FilestoreInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.timeouts"></a>

```go
Timeouts FilestoreInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts">FilestoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#timeouts FilestoreInstance#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The name of the Filestore zone of the instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#zone FilestoreInstance#zone}

---

### FilestoreInstanceFileShares <a name="FilestoreInstanceFileShares" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

&filestoreinstance.FilestoreInstanceFileShares {
	CapacityGb: *f64,
	Name: *string,
	NfsExportOptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | File share capacity in GiB. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name">Name</a></code> | <code>*string</code> | The name of the fileshare (16 characters or less). |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions">NfsExportOptions</a></code> | <code>interface{}</code> | nfs_export_options block. |

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.capacityGb"></a>

```go
CapacityGb *f64
```

- *Type:* *f64

File share capacity in GiB.

This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#capacity_gb FilestoreInstance#capacity_gb}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the fileshare (16 characters or less).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#name FilestoreInstance#name}

---

##### `NfsExportOptions`<sup>Optional</sup> <a name="NfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares.property.nfsExportOptions"></a>

```go
NfsExportOptions interface{}
```

- *Type:* interface{}

nfs_export_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#nfs_export_options FilestoreInstance#nfs_export_options}

---

### FilestoreInstanceFileSharesNfsExportOptions <a name="FilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

&filestoreinstance.FilestoreInstanceFileSharesNfsExportOptions {
	AccessMode: *string,
	AnonGid: *f64,
	AnonUid: *f64,
	IpRanges: *[]*string,
	SquashMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode">AccessMode</a></code> | <code>*string</code> | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid">AnonGid</a></code> | <code>*f64</code> | An integer representing the anonymous group id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid">AnonUid</a></code> | <code>*f64</code> | An integer representing the anonymous user id with a default value of 65534. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges">IpRanges</a></code> | <code>*[]*string</code> | List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode">SquashMode</a></code> | <code>*string</code> | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. |

---

##### `AccessMode`<sup>Optional</sup> <a name="AccessMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests.

The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#access_mode FilestoreInstance#access_mode}

---

##### `AnonGid`<sup>Optional</sup> <a name="AnonGid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonGid"></a>

```go
AnonGid *f64
```

- *Type:* *f64

An integer representing the anonymous group id with a default value of 65534.

Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#anon_gid FilestoreInstance#anon_gid}

---

##### `AnonUid`<sup>Optional</sup> <a name="AnonUid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.anonUid"></a>

```go
AnonUid *f64
```

- *Type:* *f64

An integer representing the anonymous user id with a default value of 65534.

Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#anon_uid FilestoreInstance#anon_uid}

---

##### `IpRanges`<sup>Optional</sup> <a name="IpRanges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.ipRanges"></a>

```go
IpRanges *[]*string
```

- *Type:* *[]*string

List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.

Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#ip_ranges FilestoreInstance#ip_ranges}

---

##### `SquashMode`<sup>Optional</sup> <a name="SquashMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptions.property.squashMode"></a>

```go
SquashMode *string
```

- *Type:* *string

Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access.

The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#squash_mode FilestoreInstance#squash_mode}

---

### FilestoreInstanceNetworks <a name="FilestoreInstanceNetworks" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

&filestoreinstance.FilestoreInstanceNetworks {
	Modes: *[]*string,
	Network: *string,
	ConnectMode: *string,
	ReservedIpRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes">Modes</a></code> | <code>*[]*string</code> | IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network">Network</a></code> | <code>*string</code> | The name of the GCE VPC network to which the instance is connected. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode">ConnectMode</a></code> | <code>*string</code> | The network connect mode of the Filestore instance. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | A /29 CIDR block that identifies the range of IP addresses reserved for this instance. |

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.modes"></a>

```go
Modes *[]*string
```

- *Type:* *[]*string

IP versions for which the instance has IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#modes FilestoreInstance#modes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the GCE VPC network to which the instance is connected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#network FilestoreInstance#network}

---

##### `ConnectMode`<sup>Optional</sup> <a name="ConnectMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.connectMode"></a>

```go
ConnectMode *string
```

- *Type:* *string

The network connect mode of the Filestore instance.

If not provided, the connect mode defaults to
DIRECT_PEERING. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#connect_mode FilestoreInstance#connect_mode}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworks.property.reservedIpRange"></a>

```go
ReservedIpRange *string
```

- *Type:* *string

A /29 CIDR block that identifies the range of IP addresses reserved for this instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#reserved_ip_range FilestoreInstance#reserved_ip_range}

---

### FilestoreInstanceTimeouts <a name="FilestoreInstanceTimeouts" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

&filestoreinstance.FilestoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#create FilestoreInstance#create}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#delete FilestoreInstance#delete}. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#update FilestoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#create FilestoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#delete FilestoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance#update FilestoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FilestoreInstanceFileSharesNfsExportOptionsList <a name="FilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstanceFileSharesNfsExportOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FilestoreInstanceFileSharesNfsExportOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```go
func Get(index *f64) FilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="FilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstanceFileSharesNfsExportOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FilestoreInstanceFileSharesNfsExportOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode">ResetAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid">ResetAnonGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid">ResetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges">ResetIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode">ResetSquashMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessMode` <a name="ResetAccessMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAccessMode"></a>

```go
func ResetAccessMode()
```

##### `ResetAnonGid` <a name="ResetAnonGid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonGid"></a>

```go
func ResetAnonGid()
```

##### `ResetAnonUid` <a name="ResetAnonUid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetAnonUid"></a>

```go
func ResetAnonUid()
```

##### `ResetIpRanges` <a name="ResetIpRanges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetIpRanges"></a>

```go
func ResetIpRanges()
```

##### `ResetSquashMode` <a name="ResetSquashMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.resetSquashMode"></a>

```go
func ResetSquashMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput">AnonGidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput">AnonUidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput">IpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">AnonGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">AnonUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">IpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">SquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessModeInput"></a>

```go
func AccessModeInput() *string
```

- *Type:* *string

---

##### `AnonGidInput`<sup>Optional</sup> <a name="AnonGidInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGidInput"></a>

```go
func AnonGidInput() *f64
```

- *Type:* *f64

---

##### `AnonUidInput`<sup>Optional</sup> <a name="AnonUidInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUidInput"></a>

```go
func AnonUidInput() *f64
```

- *Type:* *f64

---

##### `IpRangesInput`<sup>Optional</sup> <a name="IpRangesInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRangesInput"></a>

```go
func IpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SquashModeInput`<sup>Optional</sup> <a name="SquashModeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashModeInput"></a>

```go
func SquashModeInput() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AnonGid`<sup>Required</sup> <a name="AnonGid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```go
func AnonGid() *f64
```

- *Type:* *f64

---

##### `AnonUid`<sup>Required</sup> <a name="AnonUid" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```go
func AnonUid() *f64
```

- *Type:* *f64

---

##### `IpRanges`<sup>Required</sup> <a name="IpRanges" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```go
func IpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```go
func SquashMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FilestoreInstanceFileSharesOutputReference <a name="FilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstanceFileSharesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FilestoreInstanceFileSharesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions">PutNfsExportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions">ResetNfsExportOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfsExportOptions` <a name="PutNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions"></a>

```go
func PutNfsExportOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.putNfsExportOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNfsExportOptions` <a name="ResetNfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.resetNfsExportOptions"></a>

```go
func ResetNfsExportOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">NfsExportOptions</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput">CapacityGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput">NfsExportOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb">CapacityGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NfsExportOptions`<sup>Required</sup> <a name="NfsExportOptions" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```go
func NfsExportOptions() FilestoreInstanceFileSharesNfsExportOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesNfsExportOptionsList">FilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```go
func SourceBackup() *string
```

- *Type:* *string

---

##### `CapacityGbInput`<sup>Optional</sup> <a name="CapacityGbInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGbInput"></a>

```go
func CapacityGbInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsExportOptionsInput`<sup>Optional</sup> <a name="NfsExportOptionsInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.nfsExportOptionsInput"></a>

```go
func NfsExportOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityGb`<sup>Required</sup> <a name="CapacityGb" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```go
func CapacityGb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```go
func InternalValue() FilestoreInstanceFileShares
```

- *Type:* <a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceFileShares">FilestoreInstanceFileShares</a>

---


### FilestoreInstanceNetworksList <a name="FilestoreInstanceNetworksList" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstanceNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FilestoreInstanceNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get"></a>

```go
func Get(index *f64) FilestoreInstanceNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FilestoreInstanceNetworksOutputReference <a name="FilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstanceNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FilestoreInstanceNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode">ResetConnectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectMode` <a name="ResetConnectMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetConnectMode"></a>

```go
func ResetConnectMode()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.resetReservedIpRange"></a>

```go
func ResetReservedIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput">ConnectModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput">ModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode">ConnectMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes">Modes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectModeInput`<sup>Optional</sup> <a name="ConnectModeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectModeInput"></a>

```go
func ConnectModeInput() *string
```

- *Type:* *string

---

##### `ModesInput`<sup>Optional</sup> <a name="ModesInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modesInput"></a>

```go
func ModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRangeInput"></a>

```go
func ReservedIpRangeInput() *string
```

- *Type:* *string

---

##### `ConnectMode`<sup>Required</sup> <a name="ConnectMode" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```go
func ConnectMode() *string
```

- *Type:* *string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.modes"></a>

```go
func Modes() *[]*string
```

- *Type:* *[]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```go
func ReservedIpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FilestoreInstanceTimeoutsOutputReference <a name="FilestoreInstanceTimeoutsOutputReference" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/filestoreinstance"

filestoreinstance.NewFilestoreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FilestoreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.filestoreInstance.FilestoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



