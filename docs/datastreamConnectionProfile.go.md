# `datastreamConnectionProfile` Submodule <a name="`datastreamConnectionProfile` Submodule" id="@cdktf/provider-google.datastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamConnectionProfile <a name="DatastreamConnectionProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfile(scope Construct, id *string, config DatastreamConnectionProfileConfig) DatastreamConnectionProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile">PutBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity">PutForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile">PutGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile">PutMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile">PutOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile">PutPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity">PutPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile">ResetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity">ResetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile">ResetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile">ResetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile">ResetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile">ResetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity">ResetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBigqueryProfile` <a name="PutBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile"></a>

```go
func PutBigqueryProfile(value DatastreamConnectionProfileBigqueryProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `PutForwardSshConnectivity` <a name="PutForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity"></a>

```go
func PutForwardSshConnectivity(value DatastreamConnectionProfileForwardSshConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `PutGcsProfile` <a name="PutGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile"></a>

```go
func PutGcsProfile(value DatastreamConnectionProfileGcsProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `PutMysqlProfile` <a name="PutMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile"></a>

```go
func PutMysqlProfile(value DatastreamConnectionProfileMysqlProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `PutOracleProfile` <a name="PutOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile"></a>

```go
func PutOracleProfile(value DatastreamConnectionProfileOracleProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `PutPostgresqlProfile` <a name="PutPostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile"></a>

```go
func PutPostgresqlProfile(value DatastreamConnectionProfilePostgresqlProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `PutPrivateConnectivity` <a name="PutPrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity"></a>

```go
func PutPrivateConnectivity(value DatastreamConnectionProfilePrivateConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts"></a>

```go
func PutTimeouts(value DatastreamConnectionProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `ResetBigqueryProfile` <a name="ResetBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile"></a>

```go
func ResetBigqueryProfile()
```

##### `ResetForwardSshConnectivity` <a name="ResetForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```go
func ResetForwardSshConnectivity()
```

##### `ResetGcsProfile` <a name="ResetGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile"></a>

```go
func ResetGcsProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMysqlProfile` <a name="ResetMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile"></a>

```go
func ResetMysqlProfile()
```

##### `ResetOracleProfile` <a name="ResetOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile"></a>

```go
func ResetOracleProfile()
```

##### `ResetPostgresqlProfile` <a name="ResetPostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile"></a>

```go
func ResetPostgresqlProfile()
```

##### `ResetPrivateConnectivity` <a name="ResetPrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity"></a>

```go
func ResetPrivateConnectivity()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.DatastreamConnectionProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile">BigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile">GcsProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile">MysqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile">OracleProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile">PostgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput">BigqueryProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput">ConnectionProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput">ForwardSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput">GcsProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput">MysqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput">OracleProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput">PostgresqlProfileInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput">PrivateConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId">ConnectionProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigqueryProfile`<sup>Required</sup> <a name="BigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile"></a>

```go
func BigqueryProfile() DatastreamConnectionProfileBigqueryProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `ForwardSshConnectivity`<sup>Required</sup> <a name="ForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```go
func ForwardSshConnectivity() DatastreamConnectionProfileForwardSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `GcsProfile`<sup>Required</sup> <a name="GcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile"></a>

```go
func GcsProfile() DatastreamConnectionProfileGcsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `MysqlProfile`<sup>Required</sup> <a name="MysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile"></a>

```go
func MysqlProfile() DatastreamConnectionProfileMysqlProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OracleProfile`<sup>Required</sup> <a name="OracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile"></a>

```go
func OracleProfile() DatastreamConnectionProfileOracleProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `PostgresqlProfile`<sup>Required</sup> <a name="PostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile"></a>

```go
func PostgresqlProfile() DatastreamConnectionProfilePostgresqlProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `PrivateConnectivity`<sup>Required</sup> <a name="PrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity"></a>

```go
func PrivateConnectivity() DatastreamConnectionProfilePrivateConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts"></a>

```go
func Timeouts() DatastreamConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `BigqueryProfileInput`<sup>Optional</sup> <a name="BigqueryProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```go
func BigqueryProfileInput() DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `ConnectionProfileIdInput`<sup>Optional</sup> <a name="ConnectionProfileIdInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```go
func ConnectionProfileIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForwardSshConnectivityInput`<sup>Optional</sup> <a name="ForwardSshConnectivityInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```go
func ForwardSshConnectivityInput() DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `GcsProfileInput`<sup>Optional</sup> <a name="GcsProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput"></a>

```go
func GcsProfileInput() DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MysqlProfileInput`<sup>Optional</sup> <a name="MysqlProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput"></a>

```go
func MysqlProfileInput() DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `OracleProfileInput`<sup>Optional</sup> <a name="OracleProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput"></a>

```go
func OracleProfileInput() DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `PostgresqlProfileInput`<sup>Optional</sup> <a name="PostgresqlProfileInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```go
func PostgresqlProfileInput() DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `PrivateConnectivityInput`<sup>Optional</sup> <a name="PrivateConnectivityInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput"></a>

```go
func PrivateConnectivityInput() DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId"></a>

```go
func ConnectionProfileId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamConnectionProfileBigqueryProfile <a name="DatastreamConnectionProfileBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileBigqueryProfile {

}
```


### DatastreamConnectionProfileConfig <a name="DatastreamConnectionProfileConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionProfileId: *string,
	DisplayName: *string,
	Location: *string,
	BigqueryProfile: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile,
	ForwardSshConnectivity: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity,
	GcsProfile: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile,
	Id: *string,
	Labels: *map[string]*string,
	MysqlProfile: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile,
	OracleProfile: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile,
	PostgresqlProfile: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile,
	PrivateConnectivity: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId">ConnectionProfileId</a></code> | <code>*string</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile">BigqueryProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity">ForwardSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile">GcsProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile">MysqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile">OracleProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile">PostgresqlProfile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity">PrivateConnectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionProfileId`<sup>Required</sup> <a name="ConnectionProfileId" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```go
ConnectionProfileId *string
```

- *Type:* *string

The connection profile identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `BigqueryProfile`<sup>Optional</sup> <a name="BigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```go
BigqueryProfile DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `ForwardSshConnectivity`<sup>Optional</sup> <a name="ForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```go
ForwardSshConnectivity DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `GcsProfile`<sup>Optional</sup> <a name="GcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile"></a>

```go
GcsProfile DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `MysqlProfile`<sup>Optional</sup> <a name="MysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```go
MysqlProfile DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `OracleProfile`<sup>Optional</sup> <a name="OracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile"></a>

```go
OracleProfile DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `PostgresqlProfile`<sup>Optional</sup> <a name="PostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```go
PostgresqlProfile DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `PrivateConnectivity`<sup>Optional</sup> <a name="PrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```go
PrivateConnectivity DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts"></a>

```go
Timeouts DatastreamConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

### DatastreamConnectionProfileForwardSshConnectivity <a name="DatastreamConnectionProfileForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileForwardSshConnectivity {
	Hostname: *string,
	Username: *string,
	Password: *string,
	Port: *f64,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username">Username</a></code> | <code>*string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password">Password</a></code> | <code>*string</code> | SSH password. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port">Port</a></code> | <code>*f64</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey">PrivateKey</a></code> | <code>*string</code> | SSH private key. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```go
Password *string
```

- *Type:* *string

SSH password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

SSH private key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

### DatastreamConnectionProfileGcsProfile <a name="DatastreamConnectionProfileGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileGcsProfile {
	Bucket: *string,
	RootPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket">Bucket</a></code> | <code>*string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath">RootPath</a></code> | <code>*string</code> | The root path inside the Cloud Storage bucket. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

##### `RootPath`<sup>Optional</sup> <a name="RootPath" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```go
RootPath *string
```

- *Type:* *string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

### DatastreamConnectionProfileMysqlProfile <a name="DatastreamConnectionProfileMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMysqlProfile {
	Hostname: *string,
	Password: *string,
	Username: *string,
	Port: *f64,
	SslConfig: github.com/cdktf/cdktf-provider-google-go/google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password">Password</a></code> | <code>*string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username">Username</a></code> | <code>*string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `SslConfig`<sup>Optional</sup> <a name="SslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```go
SslConfig DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfileMysqlProfileSslConfig <a name="DatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileMysqlProfileSslConfig {
	CaCertificate: *string,
	ClientCertificate: *string,
	ClientKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```go
CaCertificate *string
```

- *Type:* *string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfileOracleProfile <a name="DatastreamConnectionProfileOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileOracleProfile {
	DatabaseService: *string,
	Hostname: *string,
	Password: *string,
	Username: *string,
	ConnectionAttributes: *map[string]*string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService">DatabaseService</a></code> | <code>*string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password">Password</a></code> | <code>*string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username">Username</a></code> | <code>*string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes">ConnectionAttributes</a></code> | <code>*map[string]*string</code> | Connection string attributes. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the Oracle connection. |

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```go
DatabaseService *string
```

- *Type:* *string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `ConnectionAttributes`<sup>Optional</sup> <a name="ConnectionAttributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```go
ConnectionAttributes *map[string]*string
```

- *Type:* *map[string]*string

Connection string attributes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfilePostgresqlProfile <a name="DatastreamConnectionProfilePostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePostgresqlProfile {
	Database: *string,
	Hostname: *string,
	Password: *string,
	Username: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database">Database</a></code> | <code>*string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password">Password</a></code> | <code>*string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username">Username</a></code> | <code>*string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port">Port</a></code> | <code>*f64</code> | Port for the PostgreSQL connection. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```go
Database *string
```

- *Type:* *string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfilePrivateConnectivity <a name="DatastreamConnectionProfilePrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfilePrivateConnectivity {
	PrivateConnection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection">PrivateConnection</a></code> | <code>*string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```go
PrivateConnection *string
```

- *Type:* *string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

### DatastreamConnectionProfileTimeouts <a name="DatastreamConnectionProfileTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

&datastreamconnectionprofile.DatastreamConnectionProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#create DatastreamConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#delete DatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#update DatastreamConnectionProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamConnectionProfileBigqueryProfileOutputReference <a name="DatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileBigqueryProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileBigqueryProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---


### DatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="DatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileForwardSshConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileForwardSshConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---


### DatastreamConnectionProfileGcsProfileOutputReference <a name="DatastreamConnectionProfileGcsProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileGcsProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileGcsProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">ResetRootPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootPath` <a name="ResetRootPath" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```go
func ResetRootPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">RootPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">RootPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `RootPathInput`<sup>Optional</sup> <a name="RootPathInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```go
func RootPathInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `RootPath`<sup>Required</sup> <a name="RootPath" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```go
func RootPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---


### DatastreamConnectionProfileMysqlProfileOutputReference <a name="DatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMysqlProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMysqlProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">PutSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">ResetSslConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSslConfig` <a name="PutSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```go
func PutSslConfig(value DatastreamConnectionProfileMysqlProfileSslConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSslConfig` <a name="ResetSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```go
func ResetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">SslConfigInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SslConfig`<sup>Required</sup> <a name="SslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```go
func SslConfig() DatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SslConfigInput`<sup>Optional</sup> <a name="SslConfigInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```go
func SslConfigInput() DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---


### DatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```go
func ResetCaCertificate()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">CaCertificateSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">ClientCertificateSet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">ClientKeySet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificateSet`<sup>Required</sup> <a name="CaCertificateSet" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```go
func CaCertificateSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientCertificateSet`<sup>Required</sup> <a name="ClientCertificateSet" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```go
func ClientCertificateSet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientKeySet`<sup>Required</sup> <a name="ClientKeySet" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```go
func ClientKeySet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```go
func CaCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### DatastreamConnectionProfileOracleProfileOutputReference <a name="DatastreamConnectionProfileOracleProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileOracleProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileOracleProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">ResetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionAttributes` <a name="ResetConnectionAttributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```go
func ResetConnectionAttributes()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">ConnectionAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">DatabaseServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">ConnectionAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">DatabaseService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionAttributesInput`<sup>Optional</sup> <a name="ConnectionAttributesInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```go
func ConnectionAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseServiceInput`<sup>Optional</sup> <a name="DatabaseServiceInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```go
func DatabaseServiceInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ConnectionAttributes`<sup>Required</sup> <a name="ConnectionAttributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```go
func ConnectionAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseService`<sup>Required</sup> <a name="DatabaseService" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```go
func DatabaseService() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePostgresqlProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePostgresqlProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---


### DatastreamConnectionProfilePrivateConnectivityOutputReference <a name="DatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfilePrivateConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfilePrivateConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">PrivateConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">PrivateConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateConnectionInput`<sup>Optional</sup> <a name="PrivateConnectionInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```go
func PrivateConnectionInput() *string
```

- *Type:* *string

---

##### `PrivateConnection`<sup>Required</sup> <a name="PrivateConnection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```go
func PrivateConnection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---


### DatastreamConnectionProfileTimeoutsOutputReference <a name="DatastreamConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datastreamconnectionprofile"

datastreamconnectionprofile.NewDatastreamConnectionProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatastreamConnectionProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



