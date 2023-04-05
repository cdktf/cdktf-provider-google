# `cloudbuildBitbucketServerConfig` Submodule <a name="`cloudbuildBitbucketServerConfig` Submodule" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudbuildBitbucketServerConfig <a name="CloudbuildBitbucketServerConfig" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.NewCloudbuildBitbucketServerConfig(scope Construct, id *string, config CloudbuildBitbucketServerConfigConfig) CloudbuildBitbucketServerConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig">CloudbuildBitbucketServerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig">CloudbuildBitbucketServerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories">PutConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetConnectedRepositories">ResetConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetPeeredNetwork">ResetPeeredNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConnectedRepositories` <a name="PutConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories"></a>

```go
func PutConnectedRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putConnectedRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets"></a>

```go
func PutSecrets(value CloudbuildBitbucketServerConfigSecrets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts"></a>

```go
func PutTimeouts(value CloudbuildBitbucketServerConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

---

##### `ResetConnectedRepositories` <a name="ResetConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetConnectedRepositories"></a>

```go
func ResetConnectedRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetPeeredNetwork` <a name="ResetPeeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetPeeredNetwork"></a>

```go
func ResetPeeredNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetSslCa"></a>

```go
func ResetSslCa()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositories">ConnectedRepositories</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList">CloudbuildBitbucketServerConfigConnectedRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference">CloudbuildBitbucketServerConfigSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference">CloudbuildBitbucketServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.webhookKey">WebhookKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositoriesInput">ConnectedRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetworkInput">PeeredNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secretsInput">SecretsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectedRepositories`<sup>Required</sup> <a name="ConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositories"></a>

```go
func ConnectedRepositories() CloudbuildBitbucketServerConfigConnectedRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList">CloudbuildBitbucketServerConfigConnectedRepositoriesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secrets"></a>

```go
func Secrets() CloudbuildBitbucketServerConfigSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference">CloudbuildBitbucketServerConfigSecretsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeouts"></a>

```go
func Timeouts() CloudbuildBitbucketServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference">CloudbuildBitbucketServerConfigTimeoutsOutputReference</a>

---

##### `WebhookKey`<sup>Required</sup> <a name="WebhookKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.webhookKey"></a>

```go
func WebhookKey() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `ConnectedRepositoriesInput`<sup>Optional</sup> <a name="ConnectedRepositoriesInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.connectedRepositoriesInput"></a>

```go
func ConnectedRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PeeredNetworkInput`<sup>Optional</sup> <a name="PeeredNetworkInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetworkInput"></a>

```go
func PeeredNetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.secretsInput"></a>

```go
func SecretsInput() CloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.peeredNetwork"></a>

```go
func PeeredNetwork() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudbuildBitbucketServerConfigConfig <a name="CloudbuildBitbucketServerConfigConfig" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

&cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiKey: *string,
	ConfigId: *string,
	HostUri: *string,
	Location: *string,
	Secrets: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets,
	Username: *string,
	ConnectedRepositories: interface{},
	Id: *string,
	PeeredNetwork: *string,
	Project: *string,
	SslCa: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.configId">ConfigId</a></code> | <code>*string</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.username">Username</a></code> | <code>*string</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connectedRepositories">ConnectedRepositories</a></code> | <code>interface{}</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>*string</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#api_key CloudbuildBitbucketServerConfig#api_key}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#config_id CloudbuildBitbucketServerConfig#config_id}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#host_uri CloudbuildBitbucketServerConfig#host_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#location CloudbuildBitbucketServerConfig#location}

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.secrets"></a>

```go
Secrets CloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#secrets CloudbuildBitbucketServerConfig#secrets}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#username CloudbuildBitbucketServerConfig#username}

---

##### `ConnectedRepositories`<sup>Optional</sup> <a name="ConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.connectedRepositories"></a>

```go
ConnectedRepositories interface{}
```

- *Type:* interface{}

connected_repositories block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#connected_repositories CloudbuildBitbucketServerConfig#connected_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#id CloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeeredNetwork`<sup>Optional</sup> <a name="PeeredNetwork" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.peeredNetwork"></a>

```go
PeeredNetwork *string
```

- *Type:* *string

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#peered_network CloudbuildBitbucketServerConfig#peered_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#project CloudbuildBitbucketServerConfig#project}.

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#ssl_ca CloudbuildBitbucketServerConfig#ssl_ca}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConfig.property.timeouts"></a>

```go
Timeouts CloudbuildBitbucketServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts">CloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#timeouts CloudbuildBitbucketServerConfig#timeouts}

---

### CloudbuildBitbucketServerConfigConnectedRepositories <a name="CloudbuildBitbucketServerConfigConnectedRepositories" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

&cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfigConnectedRepositories {
	ProjectKey: *string,
	RepoSlug: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Identifier for the project storing the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | Identifier for the repository. |

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Identifier for the project storing the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#project_key CloudbuildBitbucketServerConfig#project_key}

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug"></a>

```go
RepoSlug *string
```

- *Type:* *string

Identifier for the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#repo_slug CloudbuildBitbucketServerConfig#repo_slug}

---

### CloudbuildBitbucketServerConfigSecrets <a name="CloudbuildBitbucketServerConfigSecrets" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

&cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfigSecrets {
	AdminAccessTokenVersionName: *string,
	ReadAccessTokenVersionName: *string,
	WebhookSecretVersionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName">AdminAccessTokenVersionName</a></code> | <code>*string</code> | The resource name for the admin access token's secret version. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName">ReadAccessTokenVersionName</a></code> | <code>*string</code> | The resource name for the read access token's secret version. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName">WebhookSecretVersionName</a></code> | <code>*string</code> | Immutable. |

---

##### `AdminAccessTokenVersionName`<sup>Required</sup> <a name="AdminAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName"></a>

```go
AdminAccessTokenVersionName *string
```

- *Type:* *string

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#admin_access_token_version_name CloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

##### `ReadAccessTokenVersionName`<sup>Required</sup> <a name="ReadAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName"></a>

```go
ReadAccessTokenVersionName *string
```

- *Type:* *string

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#read_access_token_version_name CloudbuildBitbucketServerConfig#read_access_token_version_name}

---

##### `WebhookSecretVersionName`<sup>Required</sup> <a name="WebhookSecretVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName"></a>

```go
WebhookSecretVersionName *string
```

- *Type:* *string

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#webhook_secret_version_name CloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

### CloudbuildBitbucketServerConfigTimeouts <a name="CloudbuildBitbucketServerConfigTimeouts" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

&cloudbuildbitbucketserverconfig.CloudbuildBitbucketServerConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#create CloudbuildBitbucketServerConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#delete CloudbuildBitbucketServerConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudbuild_bitbucket_server_config#update CloudbuildBitbucketServerConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudbuildBitbucketServerConfigConnectedRepositoriesList <a name="CloudbuildBitbucketServerConfigConnectedRepositoriesList" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.NewCloudbuildBitbucketServerConfigConnectedRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudbuildBitbucketServerConfigConnectedRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get"></a>

```go
func Get(index *f64) CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference <a name="CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.NewCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput">RepoSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `RepoSlugInput`<sup>Optional</sup> <a name="RepoSlugInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput"></a>

```go
func RepoSlugInput() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug"></a>

```go
func RepoSlug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudbuildBitbucketServerConfigSecretsOutputReference <a name="CloudbuildBitbucketServerConfigSecretsOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.NewCloudbuildBitbucketServerConfigSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildBitbucketServerConfigSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput">AdminAccessTokenVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput">ReadAccessTokenVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput">WebhookSecretVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName">AdminAccessTokenVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName">ReadAccessTokenVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName">WebhookSecretVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminAccessTokenVersionNameInput`<sup>Optional</sup> <a name="AdminAccessTokenVersionNameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput"></a>

```go
func AdminAccessTokenVersionNameInput() *string
```

- *Type:* *string

---

##### `ReadAccessTokenVersionNameInput`<sup>Optional</sup> <a name="ReadAccessTokenVersionNameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput"></a>

```go
func ReadAccessTokenVersionNameInput() *string
```

- *Type:* *string

---

##### `WebhookSecretVersionNameInput`<sup>Optional</sup> <a name="WebhookSecretVersionNameInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput"></a>

```go
func WebhookSecretVersionNameInput() *string
```

- *Type:* *string

---

##### `AdminAccessTokenVersionName`<sup>Required</sup> <a name="AdminAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName"></a>

```go
func AdminAccessTokenVersionName() *string
```

- *Type:* *string

---

##### `ReadAccessTokenVersionName`<sup>Required</sup> <a name="ReadAccessTokenVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName"></a>

```go
func ReadAccessTokenVersionName() *string
```

- *Type:* *string

---

##### `WebhookSecretVersionName`<sup>Required</sup> <a name="WebhookSecretVersionName" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName"></a>

```go
func WebhookSecretVersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigSecrets">CloudbuildBitbucketServerConfigSecrets</a>

---


### CloudbuildBitbucketServerConfigTimeoutsOutputReference <a name="CloudbuildBitbucketServerConfigTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudbuildbitbucketserverconfig"

cloudbuildbitbucketserverconfig.NewCloudbuildBitbucketServerConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudbuildBitbucketServerConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildBitbucketServerConfig.CloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



