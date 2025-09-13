# `apigeeSecurityAction` Submodule <a name="`apigeeSecurityAction` Submodule" id="@cdktf/provider-google.apigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityAction <a name="ApigeeSecurityAction" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityAction(scope: Construct, id: string, config: ApigeeSecurityActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig">ApigeeSecurityActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig">ApigeeSecurityActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig">putConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag">putFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies">resetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag">resetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow"></a>

```typescript
public putAllow(value: ApigeeSecurityActionAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `putConditionConfig` <a name="putConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig"></a>

```typescript
public putConditionConfig(value: ApigeeSecurityActionConditionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny"></a>

```typescript
public putDeny(value: ApigeeSecurityActionDeny): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `putFlag` <a name="putFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag"></a>

```typescript
public putFlag(value: ApigeeSecurityActionFlag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeSecurityActionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetApiProxies` <a name="resetApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies"></a>

```typescript
public resetApiProxies(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetFlag` <a name="resetFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag"></a>

```typescript
public resetFlag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

apigeeSecurityAction.ApigeeSecurityAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeSecurityAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput">apiProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput">conditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput">flagInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput">securityActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies">apiProxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId">securityActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow"></a>

```typescript
public readonly allow: ApigeeSecurityActionAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig"></a>

```typescript
public readonly conditionConfig: ApigeeSecurityActionConditionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny"></a>

```typescript
public readonly deny: ApigeeSecurityActionDenyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a>

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag"></a>

```typescript
public readonly flag: ApigeeSecurityActionFlagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeSecurityActionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput"></a>

```typescript
public readonly allowInput: ApigeeSecurityActionAllow;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `apiProxiesInput`<sup>Optional</sup> <a name="apiProxiesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput"></a>

```typescript
public readonly apiProxiesInput: string[];
```

- *Type:* string[]

---

##### `conditionConfigInput`<sup>Optional</sup> <a name="conditionConfigInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput"></a>

```typescript
public readonly conditionConfigInput: ApigeeSecurityActionConditionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput"></a>

```typescript
public readonly denyInput: ApigeeSecurityActionDeny;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `flagInput`<sup>Optional</sup> <a name="flagInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput"></a>

```typescript
public readonly flagInput: ApigeeSecurityActionFlag;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `securityActionIdInput`<sup>Optional</sup> <a name="securityActionIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput"></a>

```typescript
public readonly securityActionIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeSecurityActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `apiProxies`<sup>Required</sup> <a name="apiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies"></a>

```typescript
public readonly apiProxies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId"></a>

```typescript
public readonly securityActionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityActionAllow <a name="ApigeeSecurityActionAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionAllow: apigeeSecurityAction.ApigeeSecurityActionAllow = { ... }
```


### ApigeeSecurityActionConditionConfig <a name="ApigeeSecurityActionConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionConditionConfig: apigeeSecurityAction.ApigeeSecurityActionConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens">accessTokens</a></code> | <code>string[]</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys">apiKeys</a></code> | <code>string[]</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts">apiProducts</a></code> | <code>string[]</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns">asns</a></code> | <code>string[]</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons">botReasons</a></code> | <code>string[]</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps">developerApps</a></code> | <code>string[]</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers">developers</a></code> | <code>string[]</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods">httpMethods</a></code> | <code>string[]</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges">ipAddressRanges</a></code> | <code>string[]</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes">regionCodes</a></code> | <code>string[]</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents">userAgents</a></code> | <code>string[]</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `accessTokens`<sup>Optional</sup> <a name="accessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```typescript
public readonly accessTokens: string[];
```

- *Type:* string[]

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}

---

##### `apiKeys`<sup>Optional</sup> <a name="apiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```typescript
public readonly apiKeys: string[];
```

- *Type:* string[]

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```typescript
public readonly apiProducts: string[];
```

- *Type:* string[]

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}

---

##### `botReasons`<sup>Optional</sup> <a name="botReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons"></a>

```typescript
public readonly botReasons: string[];
```

- *Type:* string[]

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}

---

##### `developerApps`<sup>Optional</sup> <a name="developerApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps"></a>

```typescript
public readonly developerApps: string[];
```

- *Type:* string[]

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}

---

##### `developers`<sup>Optional</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers"></a>

```typescript
public readonly developers: string[];
```

- *Type:* string[]

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}

---

##### `httpMethods`<sup>Optional</sup> <a name="httpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```typescript
public readonly httpMethods: string[];
```

- *Type:* string[]

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}

---

##### `ipAddressRanges`<sup>Optional</sup> <a name="ipAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```typescript
public readonly ipAddressRanges: string[];
```

- *Type:* string[]

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}

---

##### `regionCodes`<sup>Optional</sup> <a name="regionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```typescript
public readonly regionCodes: string[];
```

- *Type:* string[]

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}

---

##### `userAgents`<sup>Optional</sup> <a name="userAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents"></a>

```typescript
public readonly userAgents: string[];
```

- *Type:* string[]

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}

---

### ApigeeSecurityActionConfig <a name="ApigeeSecurityActionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionConfig: apigeeSecurityAction.ApigeeSecurityActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId">orgId</a></code> | <code>string</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId">securityActionId</a></code> | <code>string</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state">state</a></code> | <code>string</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies">apiProxies</a></code> | <code>string[]</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description">description</a></code> | <code>string</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime">expireTime</a></code> | <code>string</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig"></a>

```typescript
public readonly conditionConfig: ApigeeSecurityActionConditionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId"></a>

```typescript
public readonly securityActionId: string;
```

- *Type:* string

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow"></a>

```typescript
public readonly allow: ApigeeSecurityActionAllow;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `apiProxies`<sup>Optional</sup> <a name="apiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies"></a>

```typescript
public readonly apiProxies: string[];
```

- *Type:* string[]

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny"></a>

```typescript
public readonly deny: ApigeeSecurityActionDeny;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag"></a>

```typescript
public readonly flag: ApigeeSecurityActionFlag;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeSecurityActionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

### ApigeeSecurityActionDeny <a name="ApigeeSecurityActionDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionDeny: apigeeSecurityAction.ApigeeSecurityActionDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode">responseCode</a></code> | <code>number</code> | The HTTP response code if the Action = DENY. |

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}

---

### ApigeeSecurityActionFlag <a name="ApigeeSecurityActionFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionFlag: apigeeSecurityAction.ApigeeSecurityActionFlag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]</code> | headers block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers"></a>

```typescript
public readonly headers: IResolvable | ApigeeSecurityActionFlagHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}

---

### ApigeeSecurityActionFlagHeaders <a name="ApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionFlagHeaders: apigeeSecurityAction.ApigeeSecurityActionFlagHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name">name</a></code> | <code>string</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value">value</a></code> | <code>string</code> | The header value to be sent to the target. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#name ApigeeSecurityAction#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#value ApigeeSecurityAction#value}

---

### ApigeeSecurityActionTimeouts <a name="ApigeeSecurityActionTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

const apigeeSecurityActionTimeouts: apigeeSecurityAction.ApigeeSecurityActionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityActionAllowOutputReference <a name="ApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeSecurityActionAllow;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---


### ApigeeSecurityActionConditionConfigOutputReference <a name="ApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">resetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">resetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">resetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns">resetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">resetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">resetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">resetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">resetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">resetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">resetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">resetUserAgents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokens` <a name="resetAccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```typescript
public resetAccessTokens(): void
```

##### `resetApiKeys` <a name="resetApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```typescript
public resetApiKeys(): void
```

##### `resetApiProducts` <a name="resetApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```typescript
public resetApiProducts(): void
```

##### `resetAsns` <a name="resetAsns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```typescript
public resetAsns(): void
```

##### `resetBotReasons` <a name="resetBotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```typescript
public resetBotReasons(): void
```

##### `resetDeveloperApps` <a name="resetDeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```typescript
public resetDeveloperApps(): void
```

##### `resetDevelopers` <a name="resetDevelopers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```typescript
public resetDevelopers(): void
```

##### `resetHttpMethods` <a name="resetHttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```typescript
public resetHttpMethods(): void
```

##### `resetIpAddressRanges` <a name="resetIpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```typescript
public resetIpAddressRanges(): void
```

##### `resetRegionCodes` <a name="resetRegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```typescript
public resetRegionCodes(): void
```

##### `resetUserAgents` <a name="resetUserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```typescript
public resetUserAgents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">accessTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">apiKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">apiProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">asnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">botReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">developerAppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput">developersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">httpMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">ipAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">regionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">userAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">accessTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">apiKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">apiProducts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns">asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons">botReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps">developerApps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers">developers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">httpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">ipAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">regionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents">userAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokensInput`<sup>Optional</sup> <a name="accessTokensInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```typescript
public readonly accessTokensInput: string[];
```

- *Type:* string[]

---

##### `apiKeysInput`<sup>Optional</sup> <a name="apiKeysInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```typescript
public readonly apiKeysInput: string[];
```

- *Type:* string[]

---

##### `apiProductsInput`<sup>Optional</sup> <a name="apiProductsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```typescript
public readonly apiProductsInput: string[];
```

- *Type:* string[]

---

##### `asnsInput`<sup>Optional</sup> <a name="asnsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```typescript
public readonly asnsInput: string[];
```

- *Type:* string[]

---

##### `botReasonsInput`<sup>Optional</sup> <a name="botReasonsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```typescript
public readonly botReasonsInput: string[];
```

- *Type:* string[]

---

##### `developerAppsInput`<sup>Optional</sup> <a name="developerAppsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```typescript
public readonly developerAppsInput: string[];
```

- *Type:* string[]

---

##### `developersInput`<sup>Optional</sup> <a name="developersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```typescript
public readonly developersInput: string[];
```

- *Type:* string[]

---

##### `httpMethodsInput`<sup>Optional</sup> <a name="httpMethodsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```typescript
public readonly httpMethodsInput: string[];
```

- *Type:* string[]

---

##### `ipAddressRangesInput`<sup>Optional</sup> <a name="ipAddressRangesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```typescript
public readonly ipAddressRangesInput: string[];
```

- *Type:* string[]

---

##### `regionCodesInput`<sup>Optional</sup> <a name="regionCodesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```typescript
public readonly regionCodesInput: string[];
```

- *Type:* string[]

---

##### `userAgentsInput`<sup>Optional</sup> <a name="userAgentsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```typescript
public readonly userAgentsInput: string[];
```

- *Type:* string[]

---

##### `accessTokens`<sup>Required</sup> <a name="accessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```typescript
public readonly accessTokens: string[];
```

- *Type:* string[]

---

##### `apiKeys`<sup>Required</sup> <a name="apiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```typescript
public readonly apiKeys: string[];
```

- *Type:* string[]

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```typescript
public readonly apiProducts: string[];
```

- *Type:* string[]

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

---

##### `botReasons`<sup>Required</sup> <a name="botReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```typescript
public readonly botReasons: string[];
```

- *Type:* string[]

---

##### `developerApps`<sup>Required</sup> <a name="developerApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```typescript
public readonly developerApps: string[];
```

- *Type:* string[]

---

##### `developers`<sup>Required</sup> <a name="developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```typescript
public readonly developers: string[];
```

- *Type:* string[]

---

##### `httpMethods`<sup>Required</sup> <a name="httpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```typescript
public readonly httpMethods: string[];
```

- *Type:* string[]

---

##### `ipAddressRanges`<sup>Required</sup> <a name="ipAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```typescript
public readonly ipAddressRanges: string[];
```

- *Type:* string[]

---

##### `regionCodes`<sup>Required</sup> <a name="regionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```typescript
public readonly regionCodes: string[];
```

- *Type:* string[]

---

##### `userAgents`<sup>Required</sup> <a name="userAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```typescript
public readonly userAgents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeSecurityActionConditionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---


### ApigeeSecurityActionDenyOutputReference <a name="ApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```typescript
public resetResponseCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeSecurityActionDeny;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---


### ApigeeSecurityActionFlagHeadersList <a name="ApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get"></a>

```typescript
public get(index: number): ApigeeSecurityActionFlagHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSecurityActionFlagHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]

---


### ApigeeSecurityActionFlagHeadersOutputReference <a name="ApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSecurityActionFlagHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>

---


### ApigeeSecurityActionFlagOutputReference <a name="ApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ApigeeSecurityActionFlagHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers"></a>

```typescript
public readonly headers: ApigeeSecurityActionFlagHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ApigeeSecurityActionFlagHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders">ApigeeSecurityActionFlagHeaders</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeSecurityActionFlag;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---


### ApigeeSecurityActionTimeoutsOutputReference <a name="ApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityAction } from '@cdktf/provider-google'

new apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSecurityActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---



