# `google_secret_manager_secret_iam_member`

Refer to the Terraform Registory for docs: [`google_secret_manager_secret_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member).

# `secretManagerSecretIamMember` Submodule <a name="`secretManagerSecretIamMember` Submodule" id="@cdktf/provider-google.secretManagerSecretIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerSecretIamMember <a name="SecretManagerSecretIamMember" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member google_secret_manager_secret_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

new secretManagerSecretIamMember.SecretManagerSecretIamMember(scope: Construct, id: string, config: SecretManagerSecretIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig">SecretManagerSecretIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig">SecretManagerSecretIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.putCondition"></a>

```typescript
public putCondition(value: SecretManagerSecretIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isConstruct"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

secretManagerSecretIamMember.SecretManagerSecretIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformElement"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformResource"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference">SecretManagerSecretIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.condition"></a>

```typescript
public readonly condition: SecretManagerSecretIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference">SecretManagerSecretIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: SecretManagerSecretIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerSecretIamMemberCondition <a name="SecretManagerSecretIamMemberCondition" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.Initializer"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

const secretManagerSecretIamMemberCondition: secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#expression SecretManagerSecretIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#title SecretManagerSecretIamMember#title}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#description SecretManagerSecretIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#expression SecretManagerSecretIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#title SecretManagerSecretIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#description SecretManagerSecretIamMember#description}.

---

### SecretManagerSecretIamMemberConfig <a name="SecretManagerSecretIamMemberConfig" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.Initializer"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

const secretManagerSecretIamMemberConfig: secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#member SecretManagerSecretIamMember#member}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#role SecretManagerSecretIamMember#role}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#secret_id SecretManagerSecretIamMember#secret_id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#id SecretManagerSecretIamMember#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#project SecretManagerSecretIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#member SecretManagerSecretIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#role SecretManagerSecretIamMember#role}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#secret_id SecretManagerSecretIamMember#secret_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: SecretManagerSecretIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#condition SecretManagerSecretIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#id SecretManagerSecretIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/secret_manager_secret_iam_member#project SecretManagerSecretIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerSecretIamMemberConditionOutputReference <a name="SecretManagerSecretIamMemberConditionOutputReference" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { secretManagerSecretIamMember } from '@cdktf/provider-google'

new secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerSecretIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretIamMember.SecretManagerSecretIamMemberCondition">SecretManagerSecretIamMemberCondition</a>

---



