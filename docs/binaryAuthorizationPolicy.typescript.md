# `binaryAuthorizationPolicy` Submodule <a name="`binaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google.binaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationPolicy <a name="BinaryAuthorizationPolicy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicy(scope: Construct, id: string, config: BinaryAuthorizationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig">BinaryAuthorizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig">BinaryAuthorizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">putAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules">putClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule">putDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">resetAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules">resetClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">resetGlobalPolicyEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdmissionWhitelistPatterns` <a name="putAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```typescript
public putAdmissionWhitelistPatterns(value: IResolvable | BinaryAuthorizationPolicyAdmissionWhitelistPatterns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

---

##### `putClusterAdmissionRules` <a name="putClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```typescript
public putClusterAdmissionRules(value: IResolvable | BinaryAuthorizationPolicyClusterAdmissionRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]

---

##### `putDefaultAdmissionRule` <a name="putDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```typescript
public putDefaultAdmissionRule(value: BinaryAuthorizationPolicyDefaultAdmissionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: BinaryAuthorizationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---

##### `resetAdmissionWhitelistPatterns` <a name="resetAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```typescript
public resetAdmissionWhitelistPatterns(): void
```

##### `resetClusterAdmissionRules` <a name="resetClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```typescript
public resetClusterAdmissionRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlobalPolicyEvaluationMode` <a name="resetGlobalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```typescript
public resetGlobalPolicyEvaluationMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BinaryAuthorizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">admissionWhitelistPatternsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">clusterAdmissionRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">defaultAdmissionRuleInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">globalPolicyEvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `admissionWhitelistPatterns`<sup>Required</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```typescript
public readonly admissionWhitelistPatterns: BinaryAuthorizationPolicyAdmissionWhitelistPatternsList;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `clusterAdmissionRules`<sup>Required</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```typescript
public readonly clusterAdmissionRules: BinaryAuthorizationPolicyClusterAdmissionRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```typescript
public readonly defaultAdmissionRule: BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: BinaryAuthorizationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `admissionWhitelistPatternsInput`<sup>Optional</sup> <a name="admissionWhitelistPatternsInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```typescript
public readonly admissionWhitelistPatternsInput: IResolvable | BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

---

##### `clusterAdmissionRulesInput`<sup>Optional</sup> <a name="clusterAdmissionRulesInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```typescript
public readonly clusterAdmissionRulesInput: IResolvable | BinaryAuthorizationPolicyClusterAdmissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]

---

##### `defaultAdmissionRuleInput`<sup>Optional</sup> <a name="defaultAdmissionRuleInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```typescript
public readonly defaultAdmissionRuleInput: BinaryAuthorizationPolicyDefaultAdmissionRule;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalPolicyEvaluationModeInput`<sup>Optional</sup> <a name="globalPolicyEvaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```typescript
public readonly globalPolicyEvaluationModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BinaryAuthorizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalPolicyEvaluationMode`<sup>Required</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```typescript
public readonly globalPolicyEvaluationMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

const binaryAuthorizationPolicyAdmissionWhitelistPatterns: binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">namePattern</a></code> | <code>string</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```typescript
public readonly namePattern: string;
```

- *Type:* string

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#name_pattern BinaryAuthorizationPolicy#name_pattern}

---

### BinaryAuthorizationPolicyClusterAdmissionRules <a name="BinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

const binaryAuthorizationPolicyClusterAdmissionRules: binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}.

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `requireAttestationsBy`<sup>Optional</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyConfig <a name="BinaryAuthorizationPolicyConfig" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

const binaryAuthorizationPolicyConfig: binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">defaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">admissionWhitelistPatterns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">clusterAdmissionRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description">description</a></code> | <code>string</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">globalPolicyEvaluationMode</a></code> | <code>string</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAdmissionRule`<sup>Required</sup> <a name="defaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```typescript
public readonly defaultAdmissionRule: BinaryAuthorizationPolicyDefaultAdmissionRule;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}

---

##### `admissionWhitelistPatterns`<sup>Optional</sup> <a name="admissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```typescript
public readonly admissionWhitelistPatterns: IResolvable | BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `clusterAdmissionRules`<sup>Optional</sup> <a name="clusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```typescript
public readonly clusterAdmissionRules: IResolvable | BinaryAuthorizationPolicyClusterAdmissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#description BinaryAuthorizationPolicy#description}

---

##### `globalPolicyEvaluationMode`<sup>Optional</sup> <a name="globalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```typescript
public readonly globalPolicyEvaluationMode: string;
```

- *Type:* string

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BinaryAuthorizationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#timeouts BinaryAuthorizationPolicy#timeouts}

---

### BinaryAuthorizationPolicyDefaultAdmissionRule <a name="BinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

const binaryAuthorizationPolicyDefaultAdmissionRule: binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `requireAttestationsBy`<sup>Optional</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyTimeouts <a name="BinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

const binaryAuthorizationPolicyTimeouts: binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```typescript
public get(index: number): BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BinaryAuthorizationPolicyAdmissionWhitelistPatterns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>[]

---


### BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">namePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">namePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namePatternInput`<sup>Optional</sup> <a name="namePatternInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```typescript
public readonly namePatternInput: string;
```

- *Type:* string

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```typescript
public readonly namePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BinaryAuthorizationPolicyAdmissionWhitelistPatterns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>

---


### BinaryAuthorizationPolicyClusterAdmissionRulesList <a name="BinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```typescript
public get(index: number): BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BinaryAuthorizationPolicyClusterAdmissionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>[]

---


### BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">resetRequireAttestationsBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequireAttestationsBy` <a name="resetRequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```typescript
public resetRequireAttestationsBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">requireAttestationsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `requireAttestationsByInput`<sup>Optional</sup> <a name="requireAttestationsByInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```typescript
public readonly requireAttestationsByInput: string[];
```

- *Type:* string[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `requireAttestationsBy`<sup>Required</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BinaryAuthorizationPolicyClusterAdmissionRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>

---


### BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">resetRequireAttestationsBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequireAttestationsBy` <a name="resetRequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```typescript
public resetRequireAttestationsBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">requireAttestationsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">requireAttestationsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `requireAttestationsByInput`<sup>Optional</sup> <a name="requireAttestationsByInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```typescript
public readonly requireAttestationsByInput: string[];
```

- *Type:* string[]

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `requireAttestationsBy`<sup>Required</sup> <a name="requireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```typescript
public readonly requireAttestationsBy: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BinaryAuthorizationPolicyDefaultAdmissionRule;
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### BinaryAuthorizationPolicyTimeoutsOutputReference <a name="BinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { binaryAuthorizationPolicy } from '@cdktf/provider-google'

new binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BinaryAuthorizationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---



