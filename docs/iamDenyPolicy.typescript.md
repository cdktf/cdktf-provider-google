# `google_iam_deny_policy`

Refer to the Terraform Registory for docs: [`google_iam_deny_policy`](https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy).

# `iamDenyPolicy` Submodule <a name="`iamDenyPolicy` Submodule" id="@cdktf/provider-google.iamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamDenyPolicy <a name="IamDenyPolicy" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

new iamDenyPolicy.IamDenyPolicy(scope: Construct, id: string, config: IamDenyPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig">IamDenyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig">IamDenyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | IamDenyPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IamDenyPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

iamDenyPolicy.IamDenyPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

iamDenyPolicy.IamDenyPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

iamDenyPolicy.IamDenyPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules"></a>

```typescript
public readonly rules: IamDenyPolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IamDenyPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | IamDenyPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamDenyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamDenyPolicyConfig <a name="IamDenyPolicyConfig" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

const iamDenyPolicyConfig: iamDenyPolicy.IamDenyPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent">parent</a></code> | <code>string</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#name IamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#parent IamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | IamDenyPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#rules IamDenyPolicy#rules}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#display_name IamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamDenyPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#timeouts IamDenyPolicy#timeouts}

---

### IamDenyPolicyRules <a name="IamDenyPolicyRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

const iamDenyPolicyRules: iamDenyPolicy.IamDenyPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule">denyRule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description">description</a></code> | <code>string</code> | The description of the rule. |

---

##### `denyRule`<sup>Optional</sup> <a name="denyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule"></a>

```typescript
public readonly denyRule: IamDenyPolicyRulesDenyRule;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#deny_rule IamDenyPolicy#deny_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

### IamDenyPolicyRulesDenyRule <a name="IamDenyPolicyRulesDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

const iamDenyPolicyRulesDenyRule: iamDenyPolicy.IamDenyPolicyRulesDenyRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition">denialCondition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions">deniedPermissions</a></code> | <code>string[]</code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals">deniedPrincipals</a></code> | <code>string[]</code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions">exceptionPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals">exceptionPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `denialCondition`<sup>Optional</sup> <a name="denialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```typescript
public readonly denialCondition: IamDenyPolicyRulesDenyRuleDenialCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#denial_condition IamDenyPolicy#denial_condition}

---

##### `deniedPermissions`<sup>Optional</sup> <a name="deniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```typescript
public readonly deniedPermissions: string[];
```

- *Type:* string[]

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#denied_permissions IamDenyPolicy#denied_permissions}

---

##### `deniedPrincipals`<sup>Optional</sup> <a name="deniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```typescript
public readonly deniedPrincipals: string[];
```

- *Type:* string[]

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#denied_principals IamDenyPolicy#denied_principals}

---

##### `exceptionPermissions`<sup>Optional</sup> <a name="exceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```typescript
public readonly exceptionPermissions: string[];
```

- *Type:* string[]

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#exception_permissions IamDenyPolicy#exception_permissions}

---

##### `exceptionPrincipals`<sup>Optional</sup> <a name="exceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```typescript
public readonly exceptionPrincipals: string[];
```

- *Type:* string[]

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#exception_principals IamDenyPolicy#exception_principals}

---

### IamDenyPolicyRulesDenyRuleDenialCondition <a name="IamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

const iamDenyPolicyRulesDenyRuleDenialCondition: iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#expression IamDenyPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#location IamDenyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#title IamDenyPolicy#title}

---

### IamDenyPolicyTimeouts <a name="IamDenyPolicyTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

const iamDenyPolicyTimeouts: iamDenyPolicy.IamDenyPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.82.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="IamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

new iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamDenyPolicyRulesDenyRuleDenialCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### IamDenyPolicyRulesDenyRuleOutputReference <a name="IamDenyPolicyRulesDenyRuleOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

new iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">putDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">resetDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">resetDeniedPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">resetDeniedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">resetExceptionPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">resetExceptionPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenialCondition` <a name="putDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```typescript
public putDenialCondition(value: IamDenyPolicyRulesDenyRuleDenialCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `resetDenialCondition` <a name="resetDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```typescript
public resetDenialCondition(): void
```

##### `resetDeniedPermissions` <a name="resetDeniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```typescript
public resetDeniedPermissions(): void
```

##### `resetDeniedPrincipals` <a name="resetDeniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```typescript
public resetDeniedPrincipals(): void
```

##### `resetExceptionPermissions` <a name="resetExceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```typescript
public resetExceptionPermissions(): void
```

##### `resetExceptionPrincipals` <a name="resetExceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```typescript
public resetExceptionPrincipals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">denialCondition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">denialConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">deniedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">deniedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">exceptionPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">exceptionPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">deniedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">deniedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">exceptionPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">exceptionPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denialCondition`<sup>Required</sup> <a name="denialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```typescript
public readonly denialCondition: IamDenyPolicyRulesDenyRuleDenialConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `denialConditionInput`<sup>Optional</sup> <a name="denialConditionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```typescript
public readonly denialConditionInput: IamDenyPolicyRulesDenyRuleDenialCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `deniedPermissionsInput`<sup>Optional</sup> <a name="deniedPermissionsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```typescript
public readonly deniedPermissionsInput: string[];
```

- *Type:* string[]

---

##### `deniedPrincipalsInput`<sup>Optional</sup> <a name="deniedPrincipalsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```typescript
public readonly deniedPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `exceptionPermissionsInput`<sup>Optional</sup> <a name="exceptionPermissionsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```typescript
public readonly exceptionPermissionsInput: string[];
```

- *Type:* string[]

---

##### `exceptionPrincipalsInput`<sup>Optional</sup> <a name="exceptionPrincipalsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```typescript
public readonly exceptionPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `deniedPermissions`<sup>Required</sup> <a name="deniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```typescript
public readonly deniedPermissions: string[];
```

- *Type:* string[]

---

##### `deniedPrincipals`<sup>Required</sup> <a name="deniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```typescript
public readonly deniedPrincipals: string[];
```

- *Type:* string[]

---

##### `exceptionPermissions`<sup>Required</sup> <a name="exceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```typescript
public readonly exceptionPermissions: string[];
```

- *Type:* string[]

---

##### `exceptionPrincipals`<sup>Required</sup> <a name="exceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```typescript
public readonly exceptionPrincipals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamDenyPolicyRulesDenyRule;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---


### IamDenyPolicyRulesList <a name="IamDenyPolicyRulesList" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

new iamDenyPolicy.IamDenyPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get"></a>

```typescript
public get(index: number): IamDenyPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamDenyPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>[]

---


### IamDenyPolicyRulesOutputReference <a name="IamDenyPolicyRulesOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

new iamDenyPolicy.IamDenyPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule">putDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule">resetDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenyRule` <a name="putDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule"></a>

```typescript
public putDenyRule(value: IamDenyPolicyRulesDenyRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `resetDenyRule` <a name="resetDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```typescript
public resetDenyRule(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule">denyRule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput">denyRuleInput</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denyRule`<sup>Required</sup> <a name="denyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule"></a>

```typescript
public readonly denyRule: IamDenyPolicyRulesDenyRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `denyRuleInput`<sup>Optional</sup> <a name="denyRuleInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```typescript
public readonly denyRuleInput: IamDenyPolicyRulesDenyRule;
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamDenyPolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>

---


### IamDenyPolicyTimeoutsOutputReference <a name="IamDenyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamDenyPolicy } from '@cdktf/provider-google'

new iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamDenyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---



