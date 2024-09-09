# `orgPolicyPolicy` Submodule <a name="`orgPolicyPolicy` Submodule" id="@cdktf/provider-google.orgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyPolicy <a name="OrgPolicyPolicy" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicy(scope: Construct, id: string, config: OrgPolicyPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig">OrgPolicyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig">OrgPolicyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec">putDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec">resetDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDryRunSpec` <a name="putDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec"></a>

```typescript
public putDryRunSpec(value: OrgPolicyPolicyDryRunSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec"></a>

```typescript
public putSpec(value: OrgPolicyPolicySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: OrgPolicyPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---

##### `resetDryRunSpec` <a name="resetDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec"></a>

```typescript
public resetDryRunSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

orgPolicyPolicy.OrgPolicyPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrgPolicyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrgPolicyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrgPolicyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput">dryRunSpecInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dryRunSpec`<sup>Required</sup> <a name="dryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec"></a>

```typescript
public readonly dryRunSpec: OrgPolicyPolicyDryRunSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec"></a>

```typescript
public readonly spec: OrgPolicyPolicySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: OrgPolicyPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `dryRunSpecInput`<sup>Optional</sup> <a name="dryRunSpecInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput"></a>

```typescript
public readonly dryRunSpecInput: OrgPolicyPolicyDryRunSpec;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput"></a>

```typescript
public readonly specInput: OrgPolicyPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OrgPolicyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyPolicyConfig <a name="OrgPolicyPolicyConfig" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicyConfig: orgPolicyPolicy.OrgPolicyPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name">name</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec">dryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#name OrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#parent OrgPolicyPolicy#parent}

---

##### `dryRunSpec`<sup>Optional</sup> <a name="dryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec"></a>

```typescript
public readonly dryRunSpec: OrgPolicyPolicyDryRunSpec;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#dry_run_spec OrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec"></a>

```typescript
public readonly spec: OrgPolicyPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#spec OrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OrgPolicyPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}

---

### OrgPolicyPolicyDryRunSpec <a name="OrgPolicyPolicyDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicyDryRunSpec: orgPolicyPolicy.OrgPolicyPolicyDryRunSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines the inheritance behavior for this policy. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset">reset</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]</code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset"></a>

```typescript
public readonly reset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules"></a>

```typescript
public readonly rules: IResolvable | OrgPolicyPolicyDryRunSpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicyDryRunSpecRules <a name="OrgPolicyPolicyDryRunSpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicyDryRunSpecRules: orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll">allowAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll">denyAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce">enforce</a></code> | <code>string</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll"></a>

```typescript
public readonly allowAll: string;
```

- *Type:* string

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition"></a>

```typescript
public readonly condition: OrgPolicyPolicyDryRunSpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll"></a>

```typescript
public readonly denyAll: string;
```

- *Type:* string

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce"></a>

```typescript
public readonly enforce: string;
```

- *Type:* string

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values"></a>

```typescript
public readonly values: OrgPolicyPolicyDryRunSpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicyDryRunSpecRulesCondition <a name="OrgPolicyPolicyDryRunSpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicyDryRunSpecRulesCondition: orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title">title</a></code> | <code>string</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicyDryRunSpecRulesValues <a name="OrgPolicyPolicyDryRunSpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicyDryRunSpecRulesValues: orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicySpec <a name="OrgPolicyPolicySpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicySpec: orgPolicyPolicy.OrgPolicyPolicySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines the inheritance behavior for this 'Policy'. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset">reset</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]</code> | rules block. |

---

##### `inheritFromParent`<sup>Optional</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset"></a>

```typescript
public readonly reset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules"></a>

```typescript
public readonly rules: IResolvable | OrgPolicyPolicySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicySpecRules <a name="OrgPolicyPolicySpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicySpecRules: orgPolicyPolicy.OrgPolicyPolicySpecRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll">allowAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll">denyAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce">enforce</a></code> | <code>string</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll"></a>

```typescript
public readonly allowAll: string;
```

- *Type:* string

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition"></a>

```typescript
public readonly condition: OrgPolicyPolicySpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `denyAll`<sup>Optional</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll"></a>

```typescript
public readonly denyAll: string;
```

- *Type:* string

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce"></a>

```typescript
public readonly enforce: string;
```

- *Type:* string

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values"></a>

```typescript
public readonly values: OrgPolicyPolicySpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicySpecRulesCondition <a name="OrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicySpecRulesCondition: orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title">title</a></code> | <code>string</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicySpecRulesValues <a name="OrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicySpecRulesValues: orgPolicyPolicy.OrgPolicyPolicySpecRulesValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `deniedValues`<sup>Optional</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicyTimeouts <a name="OrgPolicyPolicyTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

const orgPolicyPolicyTimeouts: orgPolicyPolicy.OrgPolicyPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyPolicyDryRunSpecOutputReference <a name="OrgPolicyPolicyDryRunSpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | OrgPolicyPolicyDryRunSpecRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset"></a>

```typescript
public resetReset(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput">resetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset">reset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules"></a>

```typescript
public readonly rules: OrgPolicyPolicyDryRunSpecRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput"></a>

```typescript
public readonly resetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | OrgPolicyPolicyDryRunSpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset"></a>

```typescript
public readonly reset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrgPolicyPolicyDryRunSpec;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---


### OrgPolicyPolicyDryRunSpecRulesConditionOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrgPolicyPolicyDryRunSpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---


### OrgPolicyPolicyDryRunSpecRulesList <a name="OrgPolicyPolicyDryRunSpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get"></a>

```typescript
public get(index: number): OrgPolicyPolicyDryRunSpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrgPolicyPolicyDryRunSpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>[]

---


### OrgPolicyPolicyDryRunSpecRulesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition"></a>

```typescript
public putCondition(value: OrgPolicyPolicyDryRunSpecRulesCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues"></a>

```typescript
public putValues(value: OrgPolicyPolicyDryRunSpecRulesValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll"></a>

```typescript
public resetAllowAll(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll"></a>

```typescript
public resetDenyAll(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce">enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: OrgPolicyPolicyDryRunSpecRulesConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values"></a>

```typescript
public readonly values: OrgPolicyPolicyDryRunSpecRulesValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput"></a>

```typescript
public readonly allowAllInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: OrgPolicyPolicyDryRunSpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput"></a>

```typescript
public readonly denyAllInput: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: OrgPolicyPolicyDryRunSpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll"></a>

```typescript
public readonly allowAll: string;
```

- *Type:* string

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll"></a>

```typescript
public readonly denyAll: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrgPolicyPolicyDryRunSpecRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>

---


### OrgPolicyPolicyDryRunSpecRulesValuesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues"></a>

```typescript
public resetDeniedValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```typescript
public readonly deniedValuesInput: string[];
```

- *Type:* string[]

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrgPolicyPolicyDryRunSpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---


### OrgPolicyPolicySpecOutputReference <a name="OrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent">resetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset">resetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | OrgPolicyPolicySpecRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]

---

##### `resetInheritFromParent` <a name="resetInheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```typescript
public resetInheritFromParent(): void
```

##### `resetReset` <a name="resetReset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset"></a>

```typescript
public resetReset(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">inheritFromParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput">resetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent">inheritFromParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset">reset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules"></a>

```typescript
public readonly rules: OrgPolicyPolicySpecRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `inheritFromParentInput`<sup>Optional</sup> <a name="inheritFromParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```typescript
public readonly inheritFromParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resetInput`<sup>Optional</sup> <a name="resetInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```typescript
public readonly resetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | OrgPolicyPolicySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]

---

##### `inheritFromParent`<sup>Required</sup> <a name="inheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```typescript
public readonly inheritFromParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset"></a>

```typescript
public readonly reset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrgPolicyPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---


### OrgPolicyPolicySpecRulesConditionOutputReference <a name="OrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrgPolicyPolicySpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---


### OrgPolicyPolicySpecRulesList <a name="OrgPolicyPolicySpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicySpecRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get"></a>

```typescript
public get(index: number): OrgPolicyPolicySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrgPolicyPolicySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>[]

---


### OrgPolicyPolicySpecRulesOutputReference <a name="OrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll">resetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```typescript
public putCondition(value: OrgPolicyPolicySpecRulesCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `putValues` <a name="putValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```typescript
public putValues(value: OrgPolicyPolicySpecRulesValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```typescript
public resetAllowAll(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDenyAll` <a name="resetDenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```typescript
public resetDenyAll(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">allowAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">denyAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput">enforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput">valuesInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll">allowAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll">denyAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce">enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: OrgPolicyPolicySpecRulesConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```typescript
public readonly values: OrgPolicyPolicySpecRulesValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```typescript
public readonly allowAllInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: OrgPolicyPolicySpecRulesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `denyAllInput`<sup>Optional</sup> <a name="denyAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```typescript
public readonly denyAllInput: string;
```

- *Type:* string

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: OrgPolicyPolicySpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```typescript
public readonly allowAll: string;
```

- *Type:* string

---

##### `denyAll`<sup>Required</sup> <a name="denyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```typescript
public readonly denyAll: string;
```

- *Type:* string

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```typescript
public readonly enforce: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrgPolicyPolicySpecRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>

---


### OrgPolicyPolicySpecRulesValuesOutputReference <a name="OrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">resetDeniedValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDeniedValues` <a name="resetDeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```typescript
public resetDeniedValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">deniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">deniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `deniedValuesInput`<sup>Optional</sup> <a name="deniedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```typescript
public readonly deniedValuesInput: string[];
```

- *Type:* string[]

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deniedValues`<sup>Required</sup> <a name="deniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```typescript
public readonly deniedValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrgPolicyPolicySpecRulesValues;
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---


### OrgPolicyPolicyTimeoutsOutputReference <a name="OrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { orgPolicyPolicy } from '@cdktf/provider-google'

new orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrgPolicyPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---



