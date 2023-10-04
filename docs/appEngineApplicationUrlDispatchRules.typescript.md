# `google_app_engine_application_url_dispatch_rules`

Refer to the Terraform Registory for docs: [`google_app_engine_application_url_dispatch_rules`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules).

# `appEngineApplicationUrlDispatchRules` Submodule <a name="`appEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplicationUrlDispatchRules <a name="AppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

new appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules(scope: Construct, id: string, config: AppEngineApplicationUrlDispatchRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig">AppEngineApplicationUrlDispatchRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig">AppEngineApplicationUrlDispatchRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules">putDispatchRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDispatchRules` <a name="putDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```typescript
public putDispatchRules(value: IResolvable | AppEngineApplicationUrlDispatchRulesDispatchRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineApplicationUrlDispatchRulesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules">dispatchRules</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">dispatchRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```typescript
public readonly dispatchRules: AppEngineApplicationUrlDispatchRulesDispatchRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `dispatchRulesInput`<sup>Optional</sup> <a name="dispatchRulesInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```typescript
public readonly dispatchRulesInput: IResolvable | AppEngineApplicationUrlDispatchRulesDispatchRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineApplicationUrlDispatchRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationUrlDispatchRulesConfig <a name="AppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

const appEngineApplicationUrlDispatchRulesConfig: appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">dispatchRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```typescript
public readonly dispatchRules: IResolvable | AppEngineApplicationUrlDispatchRulesDispatchRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineApplicationUrlDispatchRulesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

### AppEngineApplicationUrlDispatchRulesDispatchRules <a name="AppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

const appEngineApplicationUrlDispatchRulesDispatchRules: appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path">path</a></code> | <code>string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service">service</a></code> | <code>string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">domain</a></code> | <code>string</code> | Domain name to match against. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}

---

### AppEngineApplicationUrlDispatchRulesTimeouts <a name="AppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

const appEngineApplicationUrlDispatchRulesTimeouts: appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

new appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```typescript
public get(index: number): AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineApplicationUrlDispatchRulesDispatchRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

---


### AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

new appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineApplicationUrlDispatchRulesDispatchRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>

---


### AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineApplicationUrlDispatchRules } from '@cdktf/provider-google'

new appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineApplicationUrlDispatchRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---



