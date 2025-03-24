# `netappVolumeQuotaRule` Submodule <a name="`netappVolumeQuotaRule` Submodule" id="@cdktf/provider-google.netappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeQuotaRule <a name="NetappVolumeQuotaRule" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule google_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

new netappVolumeQuotaRule.NetappVolumeQuotaRule(scope: Construct, id: string, config: NetappVolumeQuotaRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig">NetappVolumeQuotaRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig">NetappVolumeQuotaRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappVolumeQuotaRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeQuotaRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference">NetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMibInput">diskLimitMibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMib">diskLimitMib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeQuotaRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference">NetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskLimitMibInput`<sup>Optional</sup> <a name="diskLimitMibInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMibInput"></a>

```typescript
public readonly diskLimitMibInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappVolumeQuotaRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMib"></a>

```typescript
public readonly diskLimitMib: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeQuotaRuleConfig <a name="NetappVolumeQuotaRuleConfig" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.Initializer"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

const netappVolumeQuotaRuleConfig: netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.diskLimitMib">diskLimitMib</a></code> | <code>number</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.name">name</a></code> | <code>string</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.type">type</a></code> | <code>string</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.volumeName">volumeName</a></code> | <code>string</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.description">description</a></code> | <code>string</code> | Description for the quota rule. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.location">location</a></code> | <code>string</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#project NetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.target">target</a></code> | <code>string</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.diskLimitMib"></a>

```typescript
public readonly diskLimitMib: number;
```

- *Type:* number

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#disk_limit_mib NetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#name NetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#type NetappVolumeQuotaRule#type}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#volume_name NetappVolumeQuotaRule#volume_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#description NetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#labels NetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#location NetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#project NetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:
  - UNIX UID for individual user quota
  - UNIX GID for individual group quota
Valid targets for volumes with SMB protocol enabled:
  - Windows SID for individual user quota
Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#target NetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeQuotaRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#timeouts NetappVolumeQuotaRule#timeouts}

---

### NetappVolumeQuotaRuleTimeouts <a name="NetappVolumeQuotaRuleTimeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.Initializer"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

const netappVolumeQuotaRuleTimeouts: netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeQuotaRuleTimeoutsOutputReference <a name="NetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappVolumeQuotaRule } from '@cdktf/provider-google'

new netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeQuotaRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

---



