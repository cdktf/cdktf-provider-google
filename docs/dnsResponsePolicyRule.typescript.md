# `dnsResponsePolicyRule` Submodule <a name="`dnsResponsePolicyRule` Submodule" id="@cdktf/provider-google.dnsResponsePolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicyRule <a name="DnsResponsePolicyRule" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule google_dns_response_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

new dnsResponsePolicyRule.DnsResponsePolicyRule(scope: Construct, id: string, config: DnsResponsePolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig">DnsResponsePolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig">DnsResponsePolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData">putLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetLocalData">resetLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalData` <a name="putLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData"></a>

```typescript
public putLocalData(value: DnsResponsePolicyRuleLocalData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsResponsePolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalData` <a name="resetLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetLocalData"></a>

```typescript
public resetLocalData(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsResponsePolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsResponsePolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsResponsePolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsResponsePolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsResponsePolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localData">localData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference">DnsResponsePolicyRuleLocalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference">DnsResponsePolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localDataInput">localDataInput</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicyInput">responsePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicy">responsePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localData`<sup>Required</sup> <a name="localData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localData"></a>

```typescript
public readonly localData: DnsResponsePolicyRuleLocalDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference">DnsResponsePolicyRuleLocalDataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: DnsResponsePolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference">DnsResponsePolicyRuleTimeoutsOutputReference</a>

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localDataInput`<sup>Optional</sup> <a name="localDataInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localDataInput"></a>

```typescript
public readonly localDataInput: DnsResponsePolicyRuleLocalData;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `responsePolicyInput`<sup>Optional</sup> <a name="responsePolicyInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicyInput"></a>

```typescript
public readonly responsePolicyInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsResponsePolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicy"></a>

```typescript
public readonly responsePolicy: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyRuleConfig <a name="DnsResponsePolicyRuleConfig" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

const dnsResponsePolicyRuleConfig: dnsResponsePolicyRule.DnsResponsePolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dnsName">dnsName</a></code> | <code>string</code> | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.responsePolicy">responsePolicy</a></code> | <code>string</code> | Identifies the response policy addressed by this request. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | An identifier for this rule. Must be unique with the ResponsePolicy. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.localData">localData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | local_data block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#dns_name DnsResponsePolicyRule#dns_name}

---

##### `responsePolicy`<sup>Required</sup> <a name="responsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.responsePolicy"></a>

```typescript
public readonly responsePolicy: string;
```

- *Type:* string

Identifies the response policy addressed by this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#response_policy DnsResponsePolicyRule#response_policy}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

An identifier for this rule. Must be unique with the ResponsePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#rule_name DnsResponsePolicyRule#rule_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localData`<sup>Optional</sup> <a name="localData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.localData"></a>

```typescript
public readonly localData: DnsResponsePolicyRuleLocalData;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

local_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#local_data DnsResponsePolicyRule#local_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DnsResponsePolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#timeouts DnsResponsePolicyRule#timeouts}

---

### DnsResponsePolicyRuleLocalData <a name="DnsResponsePolicyRuleLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

const dnsResponsePolicyRuleLocalData: dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.property.localDatas">localDatas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]</code> | local_datas block. |

---

##### `localDatas`<sup>Required</sup> <a name="localDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.property.localDatas"></a>

```typescript
public readonly localDatas: IResolvable | DnsResponsePolicyRuleLocalDataLocalDatas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]

local_datas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#local_datas DnsResponsePolicyRule#local_datas}

---

### DnsResponsePolicyRuleLocalDataLocalDatas <a name="DnsResponsePolicyRuleLocalDataLocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

const dnsResponsePolicyRuleLocalDataLocalDatas: dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.name">name</a></code> | <code>string</code> | For example, www.example.com. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.type">type</a></code> | <code>string</code> | One of valid DNS resource types. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.ttl">ttl</a></code> | <code>number</code> | Number of seconds that this ResourceRecordSet can be cached by resolvers. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

For example, www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#name DnsResponsePolicyRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

One of valid DNS resource types.

Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#type DnsResponsePolicyRule#type}

---

##### `rrdatas`<sup>Optional</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#rrdatas DnsResponsePolicyRule#rrdatas}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Number of seconds that this ResourceRecordSet can be cached by resolvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#ttl DnsResponsePolicyRule#ttl}

---

### DnsResponsePolicyRuleTimeouts <a name="DnsResponsePolicyRuleTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

const dnsResponsePolicyRuleTimeouts: dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyRuleLocalDataLocalDatasList <a name="DnsResponsePolicyRuleLocalDataLocalDatasList" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

new dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get"></a>

```typescript
public get(index: number): DnsResponsePolicyRuleLocalDataLocalDatasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyRuleLocalDataLocalDatas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]

---


### DnsResponsePolicyRuleLocalDataLocalDatasOutputReference <a name="DnsResponsePolicyRuleLocalDataLocalDatasOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

new dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas">resetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRrdatas` <a name="resetRrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas"></a>

```typescript
public resetRrdatas(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput">rrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas">rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rrdatasInput`<sup>Optional</sup> <a name="rrdatasInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput"></a>

```typescript
public readonly rrdatasInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rrdatas`<sup>Required</sup> <a name="rrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas"></a>

```typescript
public readonly rrdatas: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyRuleLocalDataLocalDatas;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>

---


### DnsResponsePolicyRuleLocalDataOutputReference <a name="DnsResponsePolicyRuleLocalDataOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

new dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas">putLocalDatas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalDatas` <a name="putLocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas"></a>

```typescript
public putLocalDatas(value: IResolvable | DnsResponsePolicyRuleLocalDataLocalDatas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatas">localDatas</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList">DnsResponsePolicyRuleLocalDataLocalDatasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput">localDatasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localDatas`<sup>Required</sup> <a name="localDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatas"></a>

```typescript
public readonly localDatas: DnsResponsePolicyRuleLocalDataLocalDatasList;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList">DnsResponsePolicyRuleLocalDataLocalDatasList</a>

---

##### `localDatasInput`<sup>Optional</sup> <a name="localDatasInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput"></a>

```typescript
public readonly localDatasInput: IResolvable | DnsResponsePolicyRuleLocalDataLocalDatas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas">DnsResponsePolicyRuleLocalDataLocalDatas</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsResponsePolicyRuleLocalData;
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---


### DnsResponsePolicyRuleTimeoutsOutputReference <a name="DnsResponsePolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsResponsePolicyRule } from '@cdktf/provider-google'

new dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---



