# `google_iap_web_backend_service_iam_binding`

Refer to the Terraform Registory for docs: [`google_iap_web_backend_service_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding).

# `iapWebBackendServiceIamBinding` Submodule <a name="`iapWebBackendServiceIamBinding` Submodule" id="@cdktf/provider-google.iapWebBackendServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebBackendServiceIamBinding <a name="IapWebBackendServiceIamBinding" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding google_iap_web_backend_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

new iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding(scope: Construct, id: string, config: IapWebBackendServiceIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig">IapWebBackendServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig">IapWebBackendServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.putCondition"></a>

```typescript
public putCondition(value: IapWebBackendServiceIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isConstruct"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformElement"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformResource"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference">IapWebBackendServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.webBackendServiceInput">webBackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.webBackendService">webBackendService</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.condition"></a>

```typescript
public readonly condition: IapWebBackendServiceIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference">IapWebBackendServiceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: IapWebBackendServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `webBackendServiceInput`<sup>Optional</sup> <a name="webBackendServiceInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.webBackendServiceInput"></a>

```typescript
public readonly webBackendServiceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `webBackendService`<sup>Required</sup> <a name="webBackendService" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.webBackendService"></a>

```typescript
public readonly webBackendService: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebBackendServiceIamBindingCondition <a name="IapWebBackendServiceIamBindingCondition" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.Initializer"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

const iapWebBackendServiceIamBindingCondition: iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#expression IapWebBackendServiceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#title IapWebBackendServiceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#description IapWebBackendServiceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#expression IapWebBackendServiceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#title IapWebBackendServiceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#description IapWebBackendServiceIamBinding#description}.

---

### IapWebBackendServiceIamBindingConfig <a name="IapWebBackendServiceIamBindingConfig" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.Initializer"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

const iapWebBackendServiceIamBindingConfig: iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#members IapWebBackendServiceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#role IapWebBackendServiceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.webBackendService">webBackendService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#web_backend_service IapWebBackendServiceIamBinding#web_backend_service}. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#id IapWebBackendServiceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#project IapWebBackendServiceIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#members IapWebBackendServiceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#role IapWebBackendServiceIamBinding#role}.

---

##### `webBackendService`<sup>Required</sup> <a name="webBackendService" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.webBackendService"></a>

```typescript
public readonly webBackendService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#web_backend_service IapWebBackendServiceIamBinding#web_backend_service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: IapWebBackendServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#condition IapWebBackendServiceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#id IapWebBackendServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/iap_web_backend_service_iam_binding#project IapWebBackendServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebBackendServiceIamBindingConditionOutputReference <a name="IapWebBackendServiceIamBindingConditionOutputReference" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { iapWebBackendServiceIamBinding } from '@cdktf/provider-google'

new iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IapWebBackendServiceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapWebBackendServiceIamBinding.IapWebBackendServiceIamBindingCondition">IapWebBackendServiceIamBindingCondition</a>

---



