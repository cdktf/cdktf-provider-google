# `pubsubSubscriptionIamPolicy` Submodule <a name="`pubsubSubscriptionIamPolicy` Submodule" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscriptionIamPolicy <a name="PubsubSubscriptionIamPolicy" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy google_pubsub_subscription_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer"></a>

```typescript
import { pubsubSubscriptionIamPolicy } from '@cdktf/provider-google'

new pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy(scope: Construct, id: string, config: PubsubSubscriptionIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig">PubsubSubscriptionIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig">PubsubSubscriptionIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PubsubSubscriptionIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct"></a>

```typescript
import { pubsubSubscriptionIamPolicy } from '@cdktf/provider-google'

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement"></a>

```typescript
import { pubsubSubscriptionIamPolicy } from '@cdktf/provider-google'

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource"></a>

```typescript
import { pubsubSubscriptionIamPolicy } from '@cdktf/provider-google'

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport"></a>

```typescript
import { pubsubSubscriptionIamPolicy } from '@cdktf/provider-google'

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PubsubSubscriptionIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PubsubSubscriptionIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PubsubSubscriptionIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PubsubSubscriptionIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscriptionInput">subscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscription">subscription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscriptionInput"></a>

```typescript
public readonly subscriptionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscription"></a>

```typescript
public readonly subscription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionIamPolicyConfig <a name="PubsubSubscriptionIamPolicyConfig" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.Initializer"></a>

```typescript
import { pubsubSubscriptionIamPolicy } from '@cdktf/provider-google'

const pubsubSubscriptionIamPolicyConfig: pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.subscription">subscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#id PubsubSubscriptionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.subscription"></a>

```typescript
public readonly subscription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#id PubsubSubscriptionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}.

---



